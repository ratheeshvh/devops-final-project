import  { useState } from "react";
import "./index.css";
import "./App.css";
import TodoElement from "./Components/TodoElement";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, taskText: "Do the chores." }]);

  const addTodo = () => {
    const taskInput = document.getElementById("taskInput");
    if (taskInput.value) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: prevTodos.length ? prevTodos[prevTodos.length - 1].id + 1 : 1,
          taskText: taskInput.value,
        },
      ]);
      taskInput.value = "";
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoContainer">
      <div className="TodoCreatorContainer">
        <input type="text" id="taskInput" />
        <button onClick={addTodo}>ADD</button>
      </div>
      <div className="TodoElementContainer">
        {todos.map((todo) => (
          <TodoElement
            key={todo.id}
            taskText={todo.taskText}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
