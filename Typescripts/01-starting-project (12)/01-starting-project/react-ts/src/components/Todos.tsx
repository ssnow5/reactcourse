import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './TodoItem.module.css';

import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
