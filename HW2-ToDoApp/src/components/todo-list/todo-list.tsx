import "./todo-list.css";
import IToDo from "../types";
import ToDoItem from "../todo-item/todo-item";

interface ITodoListProps {
  todos: IToDo[];
}

const TodoList = (props: ITodoListProps) => {
  return (
    <div className="list-container">
      {props.todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
