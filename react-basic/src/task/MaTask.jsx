import { useImmer } from "use-immer";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

export default function MaTask() {
  const [items, setItems] = useImmer([]);

  function handleOnSubmit(item) {
    setItems((draft) => {
      draft.push(item);
    });
  }
  function handleReset() {
    setItems(() => []); // kosongkan daftar tugas
  }

  return (
    <div>
      <TaskForm onSubmit={handleOnSubmit} />
      <TaskList items={items} />
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
