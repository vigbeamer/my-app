import userflow from "userflow.js";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        marginTop: "20vh",
        width: "100%",
        height: "100vh",
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
  );
};

export default Login;
