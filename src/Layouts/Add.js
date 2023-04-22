import React, { useState } from "react";

export default function Add(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or description is required.");
    } else {
      props.addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">Add New Task</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={description}
            className="form-control"
            id="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            name="description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
