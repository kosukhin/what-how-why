[Что](what.md) | [Как](how.md) | [Почему](why.md)

Если включены все хуки:
```
Результат вотчинга: md,bu
bc:0,cd:1,bm:1,md:1,bu:1,bd:0,dd:0,ad:0,dad:0
```

Вотчеры работают асинхронно, в вотчер попадет результат последний 
записанный в очередь.

Вотчеры начинают срабатывать внутри хука created
Если отключены хуки bm, md:
```
Результат вотчинга: cd,bu
bc:0,cd:1,bm:0,md:0,bu:1,bd:0,dd:0,ad:0,dad:0
```