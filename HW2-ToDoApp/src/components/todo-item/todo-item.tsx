import "./todo-item.css";
import IToDo from "../types";

interface IToDoItemProps {
  todo: IToDo;
  onDelete: () => void;
}
const ToDoItem = ({ todo, onDelete }: IToDoItemProps) => {
  return (
    <div className="item-container">
      <input type="checkbox" name="isCompleted" />
      <span>Task Title is here! {todo.title}</span>
      <span style={{ cursor: "pointer" }} onClick={onDelete}>
        🗑️{" "}
      </span>
    </div>
  );
};

export default ToDoItem;
