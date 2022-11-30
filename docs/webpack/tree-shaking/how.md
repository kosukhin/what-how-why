[Что](what.md) | [Как](how.md) | [Почему](why.md)

Для тришейкинга используется плагин ModuleConcatenationPlugin

## optimization.usedExports

Позволяет пометить неиспользованные экспорты.

## package.json sideEffects

sideEffects - если установлено в false это позволяет вебпаку удалить
из бандла весь код неиспользованных модулей.
Если всетаки какой-то код нужно испольовать глобально и подключить к проекту,
то его можно задать так:
```
 "sideEffects": ["./src/some-side-effectful-file.js"]
```

Все импортируемые файлы - это субъект для тришейкинга, поэтому нужно
использовать паттерн *.css чтобы из бандла не удалялись CSS файлы
```
"sideEffects": ["./src/some-side-effectful-file.js", "*.css"]
```

sideEffects также можно задать из webpack.config.js в module.rules задать "sideEffects"

Работает этот параметр только если mode: production, должен быть включен TersePlugin

## Источник

- [Tree shaking](https://webpack.js.org/guides/tree-shaking/)