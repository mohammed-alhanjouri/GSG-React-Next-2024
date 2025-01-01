import "./todo-dashboard.css";
import IToDo from "../types";

interface ITodoListProps {
  todos: IToDo[];
}

const Dashboard = (props: ITodoListProps) => {
  return (
    <div className="dashboard-container">
      <div>
        <span style={{ fontWeight: "bold" }}>{props.todos.length}</span>
        <span>Created Tasks</span>
      </div>
      <div>
        <div>
          <span style={{ fontWeight: "bold" }}>
            {props.todos.filter((todos) => todos.isUrgent).length}
          </span>
          <span>Urgent Tasks</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>
            {props.todos.filter((todos) => todos.isCompleted).length}
          </span>
          <span>Completed Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
