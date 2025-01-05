import "./todo-dashboard.css";
import IToDo from "../types";

interface ITodoListProps {
  todos: IToDo[];
}

const Dashboard = (props: ITodoListProps) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-data created">
        <p>{props.todos.length}</p>
        <h4>Created Tasks</h4>
      </div>

      <div className="dashboard-data urgent">
        <p>{props.todos.filter((todos) => todos.isUrgent).length}</p>
        <h4>Urgent Tasks</h4>
      </div>
      <div className="dashboard-data done">
        <p>{props.todos.filter((todos) => todos.isCompleted).length}</p>
        <h4>Completed Tasks</h4>
      </div>
    </div>
  );
};

export default Dashboard;
