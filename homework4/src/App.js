import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";

function App() {
    const router = createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "*", element: <NotFound /> },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
