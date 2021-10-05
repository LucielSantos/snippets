| Título             | Tags                                      |
| ------------------ | ----------------------------------------- |
| React Notification | Typescript, Util, Component, Notification |

# React Notification

> Este snippet requer a dependencia [react-toastify](https://fkhadra.github.io/react-toastify)

Este snippet é uma abstração da documentação, pois se requerer alguma configuração, será refletida em toda a aplicação.

O componente de notificação (components/Notification) deve ser inserido no diretório raiz, por ex. src/App.tsx e dentro dos providers de tema, pois caso haja alguma customização do padrão da biblioteca, será possível acessar o tema.

As notificações são disparadas chamando a função `openNotification` que recebe alguns parâmetros contidos na sua interface. Esta função poderá ser chamada em qualquer lugar da aplicação. Esta função foi criada para abstrair as suas configurações, assim mantendo o padrão do app.
