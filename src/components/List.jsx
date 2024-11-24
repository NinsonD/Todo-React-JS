import React from "react";
import styled from "styled-components";
import { useState } from "react";

const EditButton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
const DeleteButton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const List = (props) => {
  const { setIstodo, todo, todos, setIstodos } = props;
  const deleteTodoHandler = (id) => {
    props.setTodos((prev) => prev.filter((eachitems) => eachitems.id != id));
  };
  const handleEdithandler = (id) => {
    const editTodo = props.todos.filter((item) => item.id === id);
    props.setTodo({ id: editTodo[0].id, title: editTodo[0].title });
    props.setisEdit(true);
  };
  return (
    <div>
      <ul>
        {todos.map((item) => (
          // <li key={item}>
          <li key={item.id}>
            {/* <p>{item}</p> */}
            <p>{item.title}</p>
            <EditButton onClick={() => handleEdithandler(item.id)}>
              Edit
            </EditButton>
            {/* <button onClick={() => deleteTodoHandler(item)}>Delete</button> */}
            <DeleteButton onClick={() => deleteTodoHandler(item.id)}>
              Delete
            </DeleteButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
