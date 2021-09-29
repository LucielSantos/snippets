| Título            | Tags                                           |
| ----------------- | ---------------------------------------------- |
| Storage functions | Typescript, Util, LocalStorage, SessionStorage |

# Storage functions

- Conjunto de funções para lidar com o storage do navegador, tanto _local_ como o _session storage_.

- Juntamente, há uma variável _storagePrefixKey_ que será o prefixo que será concatenado pelas funções, normalmente armazenado em uma constante e com o nome da plataforma. Sugestão: _"@platform/"_

- A função _setItemStorage_ é responsável por setar um valor em um storage do navegador.

  - Recebe como primeiro parâmetro a _key_, que será concatenado com _storagePrefixKey_.
  - Como segundo parâmetro, o valor que será inserido na _key_, a própria função faz _JSON.stringify(value)_, para evitar repetição de código.
  - Como terceiro parâmetro, recebe um _boolean_, que ditará se o valor será armazenado no _local_ ou _session storage_.

- A função _getItemStorage_ é responsável por recuperar um valor do storage do navegador.

  - Recebe como primeiro parâmetro a _key_, que será concatenado com _storagePrefixKey_.
  - Como segundo parâmetro, recebe um _boolean_, que ditará se o valor será obtido pelo _local_ ou _session storage_.
  - A própria função faz _JSON.parse(value)_, para evitar repetição de código.

- Por ultimo há a função _clearStorage_, que é responsável por limpar o storage.
  - Como segundo parâmetro, recebe um _boolean_, que ditará se será limpo o _local_ ou _session storage_.
