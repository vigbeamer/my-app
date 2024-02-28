import "./App.css";
import userflow from "userflow.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];

  const router = createBrowserRouter(routes);
  userflow.init(process.env.REACT_APP_USERFLOW);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
