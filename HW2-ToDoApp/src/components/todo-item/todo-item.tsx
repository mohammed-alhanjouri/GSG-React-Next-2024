import "./todo-item.css";
import IToDo from "../types";

interface IToDoItemProps {
  todo: IToDo;
}
const ToDoItem = ({ todo }: IToDoItemProps) => {
  return (
    <div className="item-container">
      <input type="checkbox" name="isCompleted" />
      <span>Task Title is here! {todo.title}</span>
      <span>🗑️</span>
    </div>
  );
};

export default ToDoItem;
