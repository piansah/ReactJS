import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
    const [item, setItem] = useState("");
    const [list, setList] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setList((draft) => {
            draft.push(item); // Gunakan draft, bukan list
        });
        setItem("");
    }

    return (
        <div>
            <input type="text" value={item} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
            <ul>
                {list.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}
