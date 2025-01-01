import { useState } from "react";
import "./App.css";
import IToDo from "./components/types";
import Form from "./components/form/form";
import Dashboard from "./components/todo-dashboard/todo-dashboard";
import TodoList from "./components/todo-list/todo-list";
import dayjs from "dayjs";

function App() {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const handleNewTodo = (todo: IToDo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <p>Let's get started!</p>
      <h2>{dayjs().format("dddd, D MMM")}</h2>
      <Form onSubmit={handleNewTodo} />
      <Dashboard todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
