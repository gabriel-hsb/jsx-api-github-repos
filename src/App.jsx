import { useState } from "react";

import "./global.scss";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div id="main">
      <Form username={username} handleChange={handleChange} />
      {username.length > 4 && (
        <>
          <Header username={username} />
          <List username={username} />
        </>
      )}
    </div>
  );
}

export default App;
