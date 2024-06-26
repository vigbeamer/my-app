import "./App.css";
import { useEffect } from "react";
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
  useEffect(() => {
    function resizeListener() {
      console.log("////////////////////////////");
      console.log("window.innerHeight", window.innerHeight);
      console.log("window.innerWidth", window.innerWidth);
      console.log("*******************************");
    }
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  userflow.init(process.env.REACT_APP_USERFLOW);
  userflow.identify(2, {
    device_type: window.innerWidth > 800 ? "desktop" : "mobile",
  });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
