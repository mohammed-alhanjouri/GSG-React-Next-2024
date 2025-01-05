import "./form.css";
import IToDo from "../types";

interface IFormProps {
  onSubmit: (todo: IToDo) => void;
}
const Form = (props: IFormProps) => {
  let idCounter = 1;

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title: string = e.currentTarget.taskTitle.value;
    const isUrgent: boolean = e.currentTarget.isUrgent.checked;
    if (title.trim() === "") {
      alert("ToDo Title cannot be empty!");
    } else {
      const newTodo: IToDo = {
        id: idCounter++,
        title,
        isUrgent,
        isCompleted: false,
      };
      props.onSubmit(newTodo);
    }
  };

  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <input type="text" name="taskTitle" placeholder="Type your ToDo.." />
      <div className="isUrgent-check">
        <label htmlFor="isUrgent">Is Urgent?</label>
        <input type="checkbox" name="isUrgent" />
      </div>
      <input type="submit" value="Add ToDo" />
    </form>
  );
};

export default Form;
