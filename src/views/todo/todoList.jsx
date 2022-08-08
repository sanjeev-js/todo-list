import { useState } from "react";

const ViewTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const addTodo = () => {
    const newTodo = [...todoList, { title: todoTitle }];
    setTodoList(newTodo);
  };

  // const editTodo = () => {
  //    logic to get the todo and make changes in the array
  // };

  const removeTodo = (todo) => {
    setTodoList((todoList) =>
      todoList.filter((item) => {
        return item.title !== todo;
      })
    );
  };

  return (
    <div style={{ marginTop: "50px" }}>
      {console.log(todoTitle, todoList)}
      <input
        type="input"
        placeholder="Add Todo Title"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={addTodo}>save</button>
      <ul>
        {todoList &&
          todoList.map((item, idx) => (
            <div
              key={idx}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {console.log(item)}
              {edit ? (
                <input type="input" value={item.title} />
              ) : (
                <li onClick={() => setEdit(!edit)}>{item.title}</li>
              )}
              <button onClick={() => removeTodo(item.title)}>Delete</button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ViewTodoList;
