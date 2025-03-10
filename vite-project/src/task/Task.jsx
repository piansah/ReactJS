import { useImmer } from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export default function Task() {
  const [list, setList] = useImmer([]);

  return (
    <div>
      <TaskForm setList={setList} />
      <TaskList items={list} />
    </div>
  );
}
