import { useState } from "react";
import { MdAdd, MdOutlineCancel } from "react-icons/md";

export default function TodoList({ todoItems, handleToggle }) {
  if (todoItems.length == 0) {
    return (
      <div className="py-3 flex justify-center items-center flex-col gap-2 text-gray-500">
        <MdOutlineCancel size={"48px"} />
        <p>You have no item on your list yet</p>
        <button className="bg-green-400 px-2 py-1 rounded text-xs flex items-center gap-2 text-white hover:bg-green-500">
          Add New Item <MdAdd />
        </button>
      </div>
    );
  }

  return (
    <>
      {todoItems.map((todoItem, index) => (
        <div key={index} className={`flex  gap-2 py-2 border-b-[0.5px] `}>
          <input type="checkbox" onChange={() => handleToggle(todoItem.id)} />
          <p
            className={`text-gray-600 text-sm ${
              todoItem.isCompleted && "line-through"
            }`}
          >
            {todoItem.title}
          </p>
        </div>
      ))}
    </>
  );
}
