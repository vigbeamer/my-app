import userflow from "userflow.js";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyWidth, setBodyWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    console.log("bodyHeight", bodyHeight);
  }, [bodyHeight]);
  useEffect(() => {
    console.log("bodyWidth", bodyWidth);
  }, [bodyWidth]);
  useEffect(() => {
    console.log("windowHeight", windowHeight);
  }, [windowHeight]);
  useEffect(() => {
    console.log("viewportHeight", viewportHeight);
  }, [viewportHeight]);

  const printBodyDimensions = () => {
    const body = document.body;

    setBodyHeight(body.scrollHeight);
    setBodyWidth(body.scrollWidth);
    setWindowHeight(window.innerHeight);
    setViewportHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    // Print dimensions on initial render
    printBodyDimensions();

    // Add event listener for window resize
    window.addEventListener("resize", printBodyDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", printBodyDimensions);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    userflow.identify(1, {
      email,
      password,
    });
    console.log(userflow.isIdentified());
  };
  return (
    <>
      <div
        style={{
          position: "sticky",
          zIndex: 20,
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <p>Body height: {bodyHeight}</p>
        <p> Body width: {bodyWidth}</p>
        <p> Window hight: {windowHeight}</p>
        <p> Viewport height: {viewportHeight}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 10,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <input
          id="email"
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
};

export default Login;
