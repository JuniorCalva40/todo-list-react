
import './App.css';

import { TodoButton } from "./components/TodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
    { content: "Aprender React", completed: true },
    { content: "Aprender MongoDb", completed: false },
    { content: "Ir de compras", completed: false },
    { content: "Hacer Ejercicio", completed: false },
];

function App() {
    return (
        <div className="Container-one">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.content} text={todo.content} />
                ))}
            </TodoList>
            <TodoButton />
        </div>
    );
}

export default App;
