package generate_test

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"reflect"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/spf13/cobra"

	"github.com/kumahq/kuma/app/kumactl/cmd/generate"
	"github.com/kumahq/kuma/app/kumactl/pkg/test"
	"github.com/kumahq/kuma/pkg/tls"
)

var _ = Describe("kumactl generate tls-certificate", func() {
	var backupNewSelfSignedCert func(tls.CertType, tls.KeyType, ...string) (tls.KeyPair, error)
	BeforeEach(func() {
		backupNewSelfSignedCert = generate.NewSelfSignedCert
	})
	AfterEach(func() {
		generate.NewSelfSignedCert = backupNewSelfSignedCert
	})

	var keyFile *os.File
	var certFile *os.File

	var stdout *bytes.Buffer
	var stderr *bytes.Buffer

	Do := func(cmd *cobra.Command) {
		cmd.SetOut(stdout)
		cmd.SetErr(stderr)

		// when
		err := cmd.Execute()

		// then
		Expect(err).ToNot(HaveOccurred())

		// and
		keyBytes, err := io.ReadAll(keyFile)
		Expect(err).ToNot(HaveOccurred())
		Expect(string(keyBytes)).To(Equal("KEY"))

		// and
		certBytes, err := io.ReadAll(certFile)
		Expect(err).ToNot(HaveOccurred())
		Expect(string(certBytes)).To(Equal("CERT"))

		// and
		Expect(stdout.String()).To(ContainSubstring(
			fmt.Sprintf("Private key saved in %s", keyFile.Name())),
		)
		Expect(stdout.String()).To(ContainSubstring(
			fmt.Sprintf("Certificate saved in %s", certFile.Name())),
		)
	}

	BeforeEach(func() {
		key, err := os.CreateTemp("", "")
		Expect(err).ToNot(HaveOccurred())
		keyFile = key

		cert, err := os.CreateTemp("", "")
		Expect(err).ToNot(HaveOccurred())
		certFile = cert

		stdout = &bytes.Buffer{}
		stderr = &bytes.Buffer{}
	})

	Context("ECDSA certificates", func() {
		BeforeEach(func() {
			generate.NewSelfSignedCert = func(certType tls.CertType, keyType tls.KeyType, hosts ...string) (tls.KeyPair, error) {
				Expect(reflect.ValueOf(keyType)).To(Equal(reflect.ValueOf(tls.ECDSAKeyType)))
				Expect(hosts).To(ConsistOf("hostname"))
				return tls.KeyPair{
					CertPEM: []byte("CERT"),
					KeyPEM:  []byte("KEY"),
				}, nil
			}
		})

		It("should generate client certificate", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "client",
				"--key-type", "ecdsa",
				"--hostname", "hostname",
			)

			// then
			Do(rootCmd)
		})

		It("should generate server certificate", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd(
				"generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "server",
				"--key-type", "ecdsa",
				"--hostname", "hostname",
			)

			// then
			Do(rootCmd)
		})
	})

	Context("client certificate", func() {
		BeforeEach(func() {
			generate.NewSelfSignedCert = func(certType tls.CertType, keyType tls.KeyType, hosts ...string) (tls.KeyPair, error) {
				Expect(reflect.ValueOf(keyType)).To(Equal(reflect.ValueOf(tls.DefaultKeyType)))
				Expect(certType).To(Equal(tls.ClientCertType))
				Expect(hosts).To(ConsistOf("client-name"))
				return tls.KeyPair{
					CertPEM: []byte("CERT"),
					KeyPEM:  []byte("KEY"),
				}, nil
			}
		})

		It("should generate client certificate", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "client",
				"--hostname", "client-name",
			)

			// then
			Do(rootCmd)
		})
		It("should validate that --hostname is present", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "client",
			)
			// when
			err := rootCmd.Execute()

			// then
			Expect(err).To(MatchError("required flag(s) \"hostname\" not set"))
		})
	})

	Context("server certificate", func() {
		BeforeEach(func() {
			generate.NewSelfSignedCert = func(certType tls.CertType, keyType tls.KeyType, hosts ...string) (tls.KeyPair, error) {
				Expect(certType).To(Equal(tls.ServerCertType))
				Expect(hosts).To(ConsistOf("kuma1.internal", "kuma2.internal"))
				return tls.KeyPair{
					CertPEM: []byte("CERT"),
					KeyPEM:  []byte("KEY"),
				}, nil
			}
		})

		It("should generate server certificate", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "server",
				"--hostname", "kuma1.internal",
				"--hostname", "kuma2.internal",
			)

			// then
			Do(rootCmd)
		})

		It("should generate an ECDSA server certificate", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "server",
				"--key-type", "ecdsa",
				"--hostname", "kuma1.internal",
				"--hostname", "kuma2.internal",
			)

			// then
			Do(rootCmd)
		})

		It("should validate that --hostname is present", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "server",
			)

			// when
			err := rootCmd.Execute()

			// then
			Expect(err).To(MatchError("required flag(s) \"hostname\" not set"))
		})

		It("should validate that --key-type is checked", func() {
			// given
			_, _, rootCmd := test.DefaultTestingRootCmd("generate", "tls-certificate",
				"--key-file", keyFile.Name(),
				"--cert-file", certFile.Name(),
				"--type", "server",
				"--hostname", "foo",
				"--key-type", "phoney",
			)
			// when
			err := rootCmd.Execute()

			// then
			Expect(err).To(MatchError(`invalid key type "phoney"`))
		})
	})
})
