import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import Badge from "./components/badge";
import TodoList from "./components/todo-list";
import Todo from "./services/Todo";

const myTodo = new Todo();

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [leftItems, setLeftItems] = useState(true);
  //this function calls the .toggleToDoStatus(id) which will be exported as props
  const handleToggleToDoStatus = (id) => {
    myTodo.toggleTodoStatus(id);

    checkLeftItems();

    // setUncompletedTask(checkToDo);
    noOfToDosUndone();

    fetchToDos();
  };

  const noOfToDosUndone = () => {
    // console.log("check");
    let count = todoItems.length;

    for (let i = todoItems.length - 1; i >= 0; i--) {
      if (todoItems[i].isCompleted === true) count--;
    }

    return count;
  };

  useEffect(() => {
    const count = noOfToDosUndone();

    setLeftItems(count > 0);
  }, [todoItems]);

  //this function deletes todo Item
  const handleDeleteToDoItem = (id) => {
    myTodo.deleteToDoItem(id);
    noOfToDosUndone();

    fetchToDos();

    // setTodoItems([...myTodo.deleteToDoItem(id)]);
  };

  //this function recalls the todo items and re renders the to do state
  function fetchToDos() {
    const todoItems = myTodo.getTodoList();

    setTodoItems([...todoItems]);
  }
  //this function tests and checks the leftItems state
  function checkLeftItems() {
    console.log(leftItems);
  }

  const handleSubmission = (event) => {
    if (todoInput == "") {
      toast.info("You have to add a task", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    event.preventDefault();

    myTodo.addItemToList(todoInput);
    setTodoInput("");

    fetchToDos();

    noOfToDosUndone();
  };

  const handleToggleStatus = (id) => {
    myTodo.toggleTodoStatus(id);

    fetchTodos();
  };

  const fetchTodos = () => {
    const todoItems = myTodo.getTodoList();
    setTodoItems([...todoItems]);
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

          <TodoList
            todoItems={todoItems}
            handleToggle={handleToggleToDoStatus}
            handleDeleteToDoItem={handleDeleteToDoItem}
          />
        </div>
        {/* //Footer section */}
        <div className="flex justify-between bg-green-100 text-sm py-2 px-2">
          {/* Footer:  */}

          {/* Search Icon | Number of items left | Filter(All, Active, Completed) */}
          <div className="flex gap-2 items-center">
            <MdOutlineSearch />
            <div className="h-full w-[1px] bg-gray-400" />
            {leftItems && (
              <p className="text-xs">{noOfToDosUndone()} Items left</p>
            )}
          </div>

          <div className="flex gap-2 text-xs">
            <Badge isActive={true}>All</Badge>
            <Badge>Active</Badge>
            <Badge>Completed</Badge>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
