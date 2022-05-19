import "./App.css";
import { useState } from "react";
import OpenModel from "./components/openModel";
import TodoList from "./components/todoList";

function App() {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <h1 className="text-5xl font-bold m-5">Todo App</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-5"
        onClick={handleClick}
      >
        <span>Add Todo</span>
      </button>
       <TodoList/>
      {open && <OpenModel setOpen={setOpen} open={open} />}
    </div>
  );
}

export default App;
