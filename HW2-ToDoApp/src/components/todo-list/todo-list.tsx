import "./todo-list.css";
import IToDo from "../types";
import ToDoItem from "../todo-item/todo-item";

interface ITodoListProps {
  todos: IToDo[];
  onToggleCompletion: (index: number) => void;
  onDelete: (index: number) => void;
}

const TodoList = (props: ITodoListProps) => {
  return (
    <div className="list-container">
      {props.todos.map((todo, index) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleCompletion={() => props.onToggleCompletion(index)}
          onDelete={() => props.onDelete(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
