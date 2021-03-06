# Drag and Drop Game

Игра Drag and Drop — это приложения для работы с `drag-and-drop` элементами создаными с помощью библиотеки `react-beautiful-dnd`. Основная концепция игры осуществить перетаскивания объектов от меньшего размера к наибольшему. `DragDropContext` место (поле), где фактически и происходит drag-and-drop. `Droppable` — это компонент который определяет откуда и куда перетаскивается элемент. `Draggable` — это элемент собственно который будет перемещаться.        

## Основные этапы создания приложения

- Инициализировать React приложение.

`$ npx create-react-app`

- Инициализировать Material Design. Инициализировать Redux. Сверстать базову структуру страницы с игрой.

`$ npm install @material-ui/core`

`$ npm install redux react-redux`

- Инициализация библиотеки react-beautiful-dnd для красивых перетаскиваний (drag and drop).

`$ npm install react-beautiful-dnd --save`

> app.js

Определить контекст работы drag-and-drop. Обработать игровые элементы после перетаскивания.

```js
/*...*/
import { DragDropContext } from 'react-beautiful-dnd'; // Beautiful DND

function App(props) {
  // Reorder items
  const reorder = (list, startIndex, endIndex) => {   
    /*...*/
  };
  // Synchronous application of changes caused by the end of a drag
  onDragEnd = (result) => {
    /*...*/
  };

  render() {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        /*...*/
      </DragDropContext>
    );
  };
};
/*...*/
```

> body-game.js

Определить область куда и откуда необходимо реализовать перетаскивания.

`{provided.placeholder}` — используется для создания свободного места `<Droppable />` во время перетаскивания.

```js
/*...*/
import { Droppable } from "react-beautiful-dnd"; // Beautiful DND

class BodyGame extends Component {
  /*...*/
  render() {
    return (
      <Droppable droppableId="droppableElements">
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            /*...*/  
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    );
  };
};
/*...*/
```

> list-game-items.js

Определить компонент который можно перетаскивать и бросать на `<Droppable />`.

`draggableId` — должен быть `DraggableId(string)`. `index` — должен быть `number` чтобы он соответствовал порядку `<Draggable />` в `<Droppable />`. Это просто индекс `<Draggable />` в списке. Эти index-идентификаторы должны быть уникальными в пределах `<Droppable />` но не должны быть уникальными между `Droppables`. Обычно значением индекса будет просто индекс, предоставленный функцией Array.prototype.map.

`snapshot` — аргумент функции, определяющий состояния перетаскиваемого элемента. Обычный вариант использования — изменение внешнего вида `<Draggable />` во время перетаскивания.

```js
/*...*/
import { Draggable } from "react-beautiful-dnd"; // Beautiful DND

class ListGameItems extends Component {
  /*...*/
  // Styles draggable elements
  getItemStyle = (isDragging, draggableStyle) => ({
    // Some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // Change background colour if dragging
    background: isDragging ? '#A5B9C9' : '',
    // Styles we need to apply on draggables
    ...draggableStyle
  });

  render() {
    return (
      <>
        <Draggable draggableId={`${id}`} index={index}>
          {(provided, snapshot) => (
            <Box
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={this.getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              /*...*/
            </Box>
          )}
        </Draggable>
      </>
    );
  };
};
/*...*/
```

- Организовать произвольное перемешивания фишек (генератор случайных неповторяющихся чисел).

- Реализовать логику окончания и рестарта игры.

- Исправить баг завершения игры.

После перетаскивания игровых фишек в нужную последовательность игра не завершается. Проблема была связана с логикой отвечающей за конец игры, которая срабатывала после рендера. А потому баллы набранные игроком использовались с предпоследнего drag-and-drop'а, а не с последнего!

Неправильная реализация:

`start onDragEnd()` > `Game Completion Logic handleEndGameCheck()` > `action draggingItems(reorderList)`

Правильная реализация:

`start onDragEnd()` > `action draggingItems(reorderList)` > `Game Completion Logic handleEndGameCheck()`

Решение — применить метод `componentDidUpdate()` (срабатывает после рендера) для проверки изменений пропсов. Если пропсы меняются выполнить логику завершения игры. Компонент `function App(props) {...}` организовать в компонент класса. Вызов хука `useStyles()` для использования в классовом компоненте заменить на `withTheme HOC`.

```js
/*...*/
import { withStyles } from "@material-ui/core/styles"; // Material-UI
// Styles
const styles = (theme) => ({
  /*...*/
});

class App extends Component {
  /*...*/
  render() {
    const { classes } = this.props;
    return (
      <>
        /*...*/
      </>
    );
  };
};
/*...*/
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
```

*Fix #1.*

- Развернуть React Applications to Github Pages.

- Валидация данных Prop-types.

`npm install --save prop-types`

**Остальные этапы создания приложения будут добавляться по мере развития проекта*.

## Скетч проекта

![Project Sketch](https://i.pinimg.com/originals/b5/e7/86/b5e78637a6c9cebac080f7c476081b75.gif)