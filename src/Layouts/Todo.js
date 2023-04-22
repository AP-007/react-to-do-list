import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <button
                onClick={() => {
                  onDelete(todo);
                }}
                key={todo.sno}
                className="btn btn-success"
              >
                {" "}
                Done
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
