import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });
  const [isEdit, setisEdit] = useState(false);
  return (
    <div>
      <AddTodo
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        setTodo={setTodo}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />
      <List
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
        isEdit={isEdit}
        setisEdit={setisEdit}
      />
    </div>
  );
};

export default App;
