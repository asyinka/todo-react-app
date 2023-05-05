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
    this.lastId = 1;
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
}

export default Todo;
