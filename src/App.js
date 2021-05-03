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
      <header>
        <div className="wrapper">
          <FontAwesomeIcon className="icon-list" icon="list" />
          <h1>To do List</h1>
        </div>
      </header>
      <main className="wrapper">
        <ul className="wrapper">
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
                    // or onChange
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
                  className="icon-trash"
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
        <form className="wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="new task"
            value={task}
            onChange={handletask}
          />
          <input type="submit" value="Add task" />
        </form>
      </main>

      <footer>
        <p>
          2021. By{" "}
          <a
            href="https://www.linkedin.com/in/manon-boiteau/"
            target="_blank"
            rel="noreferrer"
          >
            Manon
          </a>{" "}
          for{" "}
          <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
            Le Réacteur
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
