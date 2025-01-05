import "./todo-item.css";
import IToDo from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

interface IToDoItemProps {
  todo: IToDo;
  onToggleCompletion: () => void;
  onDelete: () => void;
}
const ToDoItem = ({ todo, onToggleCompletion, onDelete }: IToDoItemProps) => {
  return (
    <div
      className={`item-container ${todo.isCompleted ? "done" : ""} ${
        todo.isUrgent ? "urgent" : ""
      }`}
    >
      <FontAwesomeIcon
        icon={todo.isCompleted ? faCircleCheck : faCircle}
        style={{
          color: todo.isCompleted ? "green" : "white",
          cursor: "pointer",
          border: todo.isCompleted ? "none" : "0.5px solid black",
          borderRadius: "50%",
          fontSize: "1.5rem",
        }}
        onClick={onToggleCompletion}
      />

      <span>{todo.title}</span>

      <FontAwesomeIcon
        icon={faTrash}
        style={{ color: "red", cursor: "pointer", fontSize: "1.5rem" }}
        onClick={onDelete}
      />
    </div>
  );
};

export default ToDoItem;
