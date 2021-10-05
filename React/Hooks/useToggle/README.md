| Título          | Tags                    |
| --------------- | ----------------------- |
| Use toggle hook | Typescript, Toggle Hook |

# Use toggle hook

Este hook tem como objetivo controlar objetos que seus valores sejam `booleans`, é útil para controlar a abertura de vários modais, accordions, entre outros que necessitam deste tipo de funcionamento.

Como parâmetro recebe apenas o `initialState`.

Retorna um array, onde a primeira posição é o objeto de toggles, e a segunda é uma função responsável por setar os toggles.

A função para setar os toggles, recebe como primeiro parâmetro a key do objeto de toggles, como segundo parâmetro, sendo este opcional, o valor que será setado na key, se não passado este segundo parâmetro, irá apenas setar o contrário do valo anterior.
