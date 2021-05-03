import "./App.css";

/* Import useState() from React */
import { useState } from "react";

/* Import fontawsome library */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash, faList);

function App() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  const handletask = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = [...addTask];
    newTask.push({ name: task, isCheck: false });
    setAddTask(newTask);
    setTask("");
  };

  return (
    <div>
      <ul>
        {addTask.map((elem, index) => {
          console.log(elem);
          console.log(index);
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                name="task"
                isCheck={elem.isCheck}
                onClick={() => {
                  const checked = [...addTask];
                  checked[index].isCheck === false
                    ? (checked[index].isCheck = true)
                    : (checked[index].isCheck = false);
                  setAddTask(checked);
                }}
              />
              <label
                htmlFor={index}
                style={{
                  textDecoration: elem.isCheck ? "line-through" : "none",
                }}
              >
                {elem.name}
              </label>
              <FontAwesomeIcon
                icon="trash"
                onClick={() => {
                  const removed = [...addTask];
                  removed.splice(index, 1);
                  setAddTask(removed);
                }}
              />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new task"
          value={task}
          onChange={handletask}
        />
        <input type="submit" value="Add task" />
      </form>
    </div>
  );
}

export default App;
