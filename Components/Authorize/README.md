| Título              | Tags                                     |
| ------------------- | ---------------------------------------- |
| Authorize component | Typescript, React, Component, Authorize, |

# Authorize Component

> Observação: _Este componente deve ser usado apenas em usuários logados, ao menos que mude um pouco a sua implementação._

- É obrigatório prover a função de checagem de permissão, essa função deve retornar um `boolean`, indicando se o usuário logado pode acessar determinada `children` que irá ser passado ao AuthorizeView.

- A principal utilização é bem simples:

  - Esta utilização irá renderizar ou não o `children` de `AuthorizeView`, de acordo com a verificação de `checkPolicy`.

  ***

  ```javascript
  <AuthorizeView policy="CreateUser">
    <Button>Cadastrar usuário</Button>
  </AuthorizeView>
  ```

  ***

- Porém, este componente pode receber dois `children` específicos: `Authorized` e `NotAuthorized`

  - Assim, renderizando somente um dos dois `children`, de acordo com o retorno de `checkPolicy`: se retornar `true`, renderiza o `children` de `Authorized`, caso contrário, renderiza o `children` de `NotAuthorized`

  - Exemplo:

  ***

  ```javascript
  <AuthorizeView policy="CreateUser">
    <Authorized>
      <Button>Cadastrar usuário</Button>
    </Authorized>

    <NotAuthorized>
      <span>Você não pode acessar esta funcionalidade</span>
    </NotAuthorized>
  </AuthorizeView>
  ```

  ***
