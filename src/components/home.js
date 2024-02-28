import userflow from "userflow.js";

const Home = () => {
  userflow.identifyAnonymous();
  return <div>hi</div>;
};

export default Home;
