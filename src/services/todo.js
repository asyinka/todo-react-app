class Todo {
  //contsructor in a class is like the engine or the basic template which runs the required command it can also accept
  //other command e.g push in this case which serves to fuel the engine or provide the constructor values in this case.
  constructor(name) {
    this.name = name;
    this.todoList = [
      {
        title: "Learn a new language",
        id: 1,
        isCompleted: false,
      },
    ];
    this.lastId = 0;
  }
  //this function takes the to do to be added, update the id and add isCompleted. Then pushes the to do into the constructor's todoList
  //this takes the work of .prototype in js class
  addItemToList(todoTitle) {
    const todoObj = {
      title: todoTitle,
      id: ++this.lastId,
      isCompleted: false,
    };

    this.todoList.push(todoObj);
  }
  //this function finally returns the whole lists of todoList objects
  getTodoList() {
    return this.todoList;
  }
  //this changes the icCompleted property of a select todo
  toggleTodoStatus(id) {
    const foundToDoIndex = this.todoList.findIndex((todoItem) => {
      return todoItem.id === id;
    });

    if (foundToDoIndex === -1) {
      throw new Error("The to do item is not found");
    }

    const foundToDoItem = this.todoList[foundToDoIndex];

    foundToDoItem.isCompleted = !foundToDoItem.isCompleted;
  }

  deleteToDoItem(todo) {
    //this deletes select task at index using .splice but our id starts at 1 while index starts at 0 so i used index directly
    // const leftToDos = this.todoList.splice(id, 1);
    // return this.todoList;
    //find the index of the selected item

    const foundIndex = this.todoList.indexOf(todo);

    //then splice perform the delete task of the item at the index found

    const leftToDoItems = this.todoList.splice(foundIndex, 1);

    console.log(foundIndex);

    return this.todoList;

    //
    //this requires creating a new array to be returned
    // const NewtodoLists = [];
    // for (let i = 0; i < this.todoList.length; i++) {
    //   const newTodo = this.todoList[i];
    //   if (newTodo !== todoList.id) {
    //     NewtodoLists.push(newTodo);
    //   }
    // }
    // console.log(todoLists);
    // return todoLists;
    //
    //FILTER METHOD: also returns an array and seems like longer and more complicated process
    // const filteredToDo = this.todoList.filter((todoItem) => {
    //   return todoItem.id !== id;
    // });
  }
}

export default Todo;
