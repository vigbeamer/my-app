import userflow from "userflow.js";
const Dashboard = () => {
  const res = userflow.isIdentified();
  console.log(res);
  return (
    <div>
      <h1>isIdentified: {res ? "yes" : "no"}</h1>
      <button id="hi-button">Say hi</button>
      <button id="bye-button">Say bye</button>
    </div>
  );
};

export default Dashboard;
