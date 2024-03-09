import logo from "./logo.svg";
import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <TemperatureConverter />
            <TodoList />
        </div>
    );
}

export default App;
