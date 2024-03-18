// import userflow from "userflow.js";

const Home = () => {
  // userflow.identifyAnonymous();

  return (
    <>
      <div style={{ background: "blue", padding: 20, color: "white" }}>
        Sed sed rhoncus quam. Duis tristique dapibus lacus, vitae efficitur
        metus malesuada ac. Donec consectetur aliquam dolor, vel placerat magna
        hendrerit at. Fusce quam dolor, imperdiet in mi vitae, tempus imperdiet
        urna. Mauris ut dignissim ante. In hac habitasse platea dictumst. Donec
        lobortis dictum nunc, eget dictum lectus imperdiet id. Cras mauris nunc,
        bibendum et dignissim eu, ornare ut magna. Duis suscipit tempus odio.
        Proin sit amet luctus massa.
      </div>

      <select id="dropdwn">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </>
  );
};

export default Home;
