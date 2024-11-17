import Todos from './components/Todos';
// import Todo from './models/todo';
import NewTodo from './components/NewTodo';
// import { useState } from 'react';
import TodosContextProvider from './store/todos-context';

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // //const todos: Todo[] = [new Todo('Learn React'), new Todo('Learn Javascript')];

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  // };

  return (
    <TodosContextProvider>
      {/* <NewTodo onAddTodo={addTodoHandler} /> */}
      <NewTodo />
      {/* <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
