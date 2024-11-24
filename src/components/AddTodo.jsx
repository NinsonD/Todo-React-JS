import React from "react";
import { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const { setTodos, todos, todo, setTodo, isEdit, setisEdit } = props;
  const [isTodo, setIstodo] = useState(true);
  const addTodoHandler = () => {
    // if (todo !== "") {
    if (todo.title !== "") {
      // setTodo(true);
      setTodos((prev) => [...prev, todo]);
      // setTodo("");
      setTodo({
        id: "",
        title: "",
      });
    } else {
      setIstodo(false);
    }
  };

  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id == todo.id ? { ...item, title: todo.title } : item
      )
    );
    console.log(todo);
    console.log(todos);

    setisEdit(false);
    setTodo({ id: "", title: "" });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={todo.title}
        // value={todo}
        onChange={(e) => {
          // setTodo(e.target.value)
          setTodo({
            id: !isEdit ? Math.random() : todo.id,
            title: e.target.value,
          });
        }}
      />
      {!isTodo && (
        <p style={{ fontSize: "20px", color: "red" }}>Error: Todo is empty</p>
      )}
      {!isEdit ? (
        <button className={styles.TodoButton} onClick={addTodoHandler}>
          Add Todo
        </button>
      ) : (
        <button className={styles.TodoButton} onClick={updateTodo}>
          Update
        </button>
      )}
    </div>
  );
};

export default AddTodo;
