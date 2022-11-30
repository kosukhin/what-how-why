[Что](what.md) | [Как](how.md) | [Почему](why.md)

# Алгоритм событийного цикла

1. Выбрать и исполнить старейшую задачу из очереди макрозадач (например, «script»).
2. Исполнить все микрозадачи:
Пока очередь микрозадач не пуста: - Выбрать из очереди и исполнить старейшую микрозадачу
3. Отрисовать изменения страницы, если они есть.
4. Если очередь макрозадач пуста – подождать, пока появится макрозадача.
5. Перейти к шагу 1.

Все микрозадачи завершаются до обработки каких-либо событий или рендеринга, или перехода к другой макрозадаче.