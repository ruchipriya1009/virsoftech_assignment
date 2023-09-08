import React, { useState, useEffect } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todoArr, setTodoArr] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodoArr(storedTodos);
  }, []);

  const handleClick = () => {
    const inputElement = document.querySelector('#todo__input');
    const value = inputElement.value.trim();

    if (!value) {
      alert('Type your task in input box');
      return;
    }

    const payload = {
      todo: value,
      status: false,
      id: Date.now() + value,
      
    };

    const updatedTodoArr = [...todoArr, payload];
    localStorage.setItem('todos', JSON.stringify(updatedTodoArr));
    setTodoArr(updatedTodoArr);

    inputElement.value = '';
  };

  const updateTodo = (id) => {
    const updatedTodoArr = todoArr.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );

    localStorage.setItem('todos', JSON.stringify(updatedTodoArr));
    setTodoArr(updatedTodoArr);
   
  };

  const deleteTodo = (id) => {
    const updatedTodoArr = todoArr.filter((el) => el.id !== id);

    localStorage.setItem('todos', JSON.stringify(updatedTodoArr));
    setTodoArr(updatedTodoArr);
  };

  return (
    <div className="App">
      <div className="navbar_div">
        <h1>Todo App</h1>
      </div>

      <div className="input_div">
        <input type="text" placeholder='Type your task here' id="todo__input"  />
        <button onClick={handleClick}>Add tasks</button>
      </div>

      <div className="allTodo_div">
        {todoArr.length === 0 ? (
          <p data-text="No tasks added yet...">No tasks added yet...</p>
        ) : (
          todoArr.map((el, i) => (
            <div key={el.id}>
              <div>
                <h3>{el.todo}</h3>
              </div>
              <div>
                <button
                  onClick={() => updateTodo(el.id)}
                  style={{
                    backgroundColor: el.status ? 'green' : 'red',
                  }}
                >
                  {el.status ? 'Done' : 'Not Done'}
                </button>
              </div>
              <div>
                <button onClick={() => deleteTodo(el.id)}>Remove task</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoApp;
