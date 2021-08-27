import React from "react";
import { useState, useContext } from "react";
import "./Day33.css";
import ToggleTheme from "./ToggleTheme";
import ThemeContext from "./ThemeContext";
import TodoList from "./TodoList";

interface TodoType {
  title: string;
  done: boolean;
}

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme ? "day33_Appdark" : "day33_App"}>
          
          <div className="day33_todos">
            {todos.map((todo, index) => (
              <TodoList title={todo.title} done={todo.done} />
            ))}
          </div>
        </div>
        <ToggleTheme />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
