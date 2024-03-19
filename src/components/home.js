// import userflow from "userflow.js";

import { useState } from "react";

const Home = () => {
  // userflow.identifyAnonymous();
  const [show, setShow] = useState();

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
        <option disabled>Select a number</option>
        <option selected></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>

      <button onClick={() => setShow(!show)}>bye bytton</button>
      {show && (
        <div style={{ height: "30px", width: "30px", background: "red" }}>
          Hey
        </div>
      )}
    </>
  );
};

export default Home;
