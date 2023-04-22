import React from "react";
import ToDo from "./Todo";

export default function Todos(props) {
  let myVariable = "Todo List";
  return (
    <div>
      <div className="text-center">
        <h1> {myVariable} </h1>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        </table>
        <div className="mb-5">
          {props.todos.length == 0 ? "No task to display." : ""}
        </div>
        {props.todos.map((todo) => {
          return <ToDo todo={todo} onDelete={props.onDelete} />;
        })}
      </div>
    </div>
  );
}
