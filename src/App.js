import "./App.css";
import userflow from "userflow.js";

function App() {
  userflow.init(process.env.REACT_APP_USERFLOW);
  userflow.identifyAnonymous();

  return (
    <div className="App">
      <h1> Hey there!</h1>
      <button id="hi-button">Say hi</button>

      <button id="bye-button">Say bye</button>
    </div>
  );
}
export default App;
