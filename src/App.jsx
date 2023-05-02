import { MdAdd, MdOutlineCancel, MdOutlineSearch } from "react-icons/md";
import Badge from "./components/badge";
import { useEffect, useState } from "react";
import TodoList from "./components/todo-list";
import Todo from "./services/Todo";

const myTodo = new Todo();

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoInput, setTodoInput] = useState("delete and type");

  const handleSubmission = (event) => {
    event.preventDefault();

    myTodo.addItemToList(todoInput);

    setTodoInput("");
  };

  useEffect(() => {
    const todoItems = myTodo.getTodoList();

    setTodoItems(todoItems);
  }, []);

  return (
    <div className="bg-red-200 h-screen flex justify-center items-center">
      <div className="border-red-100 h-80 bg-white w-full max-w-[400px] flex flex-col">
        <h1 className="text-center my-2 uppercase font-bold text-gray-600">
          Things To Do
        </h1>

        <div className="px-4 py-4 grow overflow-auto">
          {/* Input */}
          <form onSubmit={handleSubmission}>
            <input
              type="text"
              placeholder="Add New Item"
              className="rounded-none border-[1px] border-solid w-full px-3 py-2 text-xs focus:rounded-none focus:outline-none focus:border-blue-300"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
          </form>
          {/*  */}
          <TodoList todoItems={todoItems} />
        </div>
        {/* //Footer section */}
        <div className="flex justify-between bg-green-100 text-sm py-2 px-2">
          {/* Footer:  */}

          {/* Search Icon | Number of items left | Filter(All, Active, Completed) */}
          <div className="flex gap-2 items-center">
            <MdOutlineSearch />
            <div className="h-full w-[1px] bg-gray-400" />
            <p className="text-xs">3 Items left</p>
          </div>

          <div className="flex gap-2 text-xs">
            <Badge isActive={true}>All</Badge>
            <Badge>Active</Badge>
            <Badge>Completed</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
