import { useState } from "react";
import "./App.css";
import IToDo from "./components/types";
import Form from "./components/form/form";
import Dashboard from "./components/todo-dashboard/todo-dashboard";
import TodoList from "./components/todo-list/todo-list";
import dayjs from "dayjs";

function App() {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const newTodo = (todo: IToDo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    if (confirm("Are you sure you want to delete this ToDo?")) {
      // setTodos(todos.filter((_, i) => i !== index));
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <p>Let's get started!</p>
      <h2>{dayjs().format("dddd, D MMM")}</h2>
      <Form onSubmit={newTodo} />
      <Dashboard todos={todos} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
