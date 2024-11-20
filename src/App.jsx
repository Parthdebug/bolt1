import React, { useState } from 'react';

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const addTodo = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
          setTodos([...todos, input]);
          setInput('');
        }
      };

      const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div>
          <h1>Todo App</h1>
          <form onSubmit={addTodo}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task"
            />
            <button type="submit">Add Todo</button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
