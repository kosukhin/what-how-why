[Что](./what.md) | [Как](./how.md) | [Почему](./why.md)

# Flex basis поведение

Если flex-shrink = 0 то значение flex-basis будет минимальным значением контейнера.

Если flex-grow = 1, то контейнер будет расширяться на допустимую ширину\высоту, если
flex-grow = 0 то основной размер контейнера будет точно равен flex-basis

grow и shrink зависят от flex-basis.

flex-basis имеет приоритет над width\height