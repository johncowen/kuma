package samples

import (
	"github.com/kumahq/kuma/pkg/core/resources/apis/system"
	"github.com/kumahq/kuma/pkg/test/resources/builders"
)

//nolint:gosec
const SampleSigningKeyValue = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEA2hVWqy1JzpbMEIrTr2UTdEsCMrTaUhAqZlhNLJrS8kc0mbPK
Z7nT1JErJGUI4/NRHSQQZND3biPEcVktu0P5Ui6Ieum8HH7ENoRaSwLgaV451LOG
5cWyObrKyCAeh1iprmX6YrP0U9NBvL7F+Ro7xjhUp/GCsEPZt/UB4zXgzf3XxxVS
fgXK0ptG3rCp2N9SpB/uZ4MhDhdN/+4fDd1hlhJWEjBKKvOHx3fOpqbXABlHkL3I
hAQbmbV3fUjTW2jfO4boiO++ITB74MGr556FoyhBiLFpC7v8aDvWPKFrlc7IVN2F
8sUj+1+iwA0g2p4btQqbpA6CpzWJ+BS7AzcgrQIDAQABAoIBAEJt+4965R+byZ9E
WoTz2gAzlQDTHCmhKPkx7pgmtRj93aTwIjiEX2VBrw2QBSxCgrPIt4GuMaCIHp+U
VZzUcM66w/IE3rsjVitxF3v/7VHLVPxYjz/Qf6CcKIbbWdFKja1E/Qcx37vk/wI6
bl2Zwxl3MTpTE8cTc+9YH3IRiF/WYd88peRhEg6B0k2erScJYzuVojD/KTpaYiv8
vXnAekm2STX7IJppwBKfDcafxWACG1MHFEx284Zs+0avGYsXYMhtmD7lJOE5iGfE
UgC3asstP8wxdBc5M4FBwWT9zoxHpkOaIsNDS1ZY32RtepuyAtqIcoPL93oLY/AI
BCPzGxUCgYEA9n9ZJrDa8ddZmv8jlJ6meuZ6OWhZ9VrKMb4nevSsoDzGrL0P+L+N
8OfjoBKVOM1TBImPIpBla6wnq045dkfxi0U1VbJUKM1SF7puGI002raV3xNK81+K
DRKLhTkM7mnhtXDJMLfkVA8s34bV+sMFIJCuMww0aRZj1IuSlT4pwusCgYEA4n2T
P7qpyLatQ82V2C1neqqk7XomDTmBp7+nnU7vbkLvuqqx0kPvBx1ZXgR5fXmbRb61
zl1za4wJKmdtpAOxpuIDi6AGZR5WUsudbi0+AllAmGBuIy6IGdoxZEdJZi1zFmoL
MqBgkTgf92L1UvxdaGSnv1EfeQM1X/lW0GCC1McCgYBO2I9Iu/tcrjigRoo4CMNR
vpVL9aAIxkC0xpFUWB07qBUYveT0+TjK3THHSwpmP+8VHXcmZC+80DVkK0JgHkUZ
+kpEHiWjY4Gly2FaAxjr+MlZsI8h5+Z9pffw5j3HqSCka+4+4iNr6+q7mSKq8mSa
dQzzkSzWjG3kV7zMdjTffwKBgQDEYCrm67rAW5t5GWydxihdlE1x1iHd/4lqX+M9
oq44hPMEf3G0pNA/8/ODcA/CekjlvQg3iJFFo2JjENBgkA9dacO3MSW6UQZ5vS+f
0rxcHvTB6YI1IOhCugtvLdv3KtsJiSJyX9m6r9YPkg6xSDzZAcTsPbMzIlQKBc9+
1t85CwKBgGEyiNHnMDspQYANNTk7ocK2EyB3iS/fdr5Wqx5jznqdBfm0NfYDNEpw
zk0CWhRmtI7HMSnFTQOz9421MiMO8CnLZLqxRBxro/Hr5kb7FqmI4/ItURKbJReK
6kKYObMl+2SL61D625B6uAH4tXHiRa2Xd5efrZogFjbJE06zEoyJ
-----END RSA PRIVATE KEY-----`

func SampleSigningKeyGlobalSecretBuilder() *builders.GlobalSecretBuilder {
	return builders.GlobalSecret().
		WithName(system.UserTokenSigningKeyPrefix + "-1").
		WithStringValue(SampleSigningKeyValue)
}

func SampleSigningKeyGlobalSecret() *system.GlobalSecretResource {
	return SampleSigningKeyGlobalSecretBuilder().Build()
}
