import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // ✅ Add a new todo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim().length === 0) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  // ✅ Delete a todo by id
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: "350px", margin: "0 auto" }}>
      <h3>Todo Demo</h3>

      {/* ✅ Add todo form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          placeholder="Add a todo..."
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </form>

      {/* ✅ Empty state */}
      {todos.length === 0 && (
        <p style={{ color: "#777" }}>No todos yet. Add one above.</p>
      )}

      {/* ✅ Todo list */}
      <ul style={{ padding: 0, listStyle: "none" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              marginBottom: "0.5rem",
            }}
          >
            <span>{todo.text}</span>

            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: "0.3rem 0.6rem",
                fontSize: "0.8rem",
                cursor: "pointer",
                background: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoDemo;
