import Addtodo from "./Components/Addtodo";
import Appname from "./Components/Appname";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <div className="todo-container">
      <Appname />
      <Addtodo />
      <TodoItems todoItems={todoItems} />
    </div>
  );
}

export default App;
