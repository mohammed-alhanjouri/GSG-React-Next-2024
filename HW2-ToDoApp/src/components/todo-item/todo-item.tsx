import "./todo-item.css";
import IToDo from "../types";

interface IToDoItemProps {
  todo: IToDo;
  onToggleCompletion: () => void;
  onDelete: () => void;
}
const ToDoItem = ({ todo, onToggleCompletion, onDelete }: IToDoItemProps) => {
  return (
    <div className="item-container">
      <input
        type="checkbox"
        name="isCompleted"
        checked={todo.isCompleted}
        onChange={onToggleCompletion}
      />
      <span>{todo.title}</span>
      <span style={{ cursor: "pointer" }} onClick={onDelete}>
        🗑️
      </span>
    </div>
  );
};

export default ToDoItem;
