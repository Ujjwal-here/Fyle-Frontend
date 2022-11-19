import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Results from "./components/Results";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Navbar username={username} setUsername={setUsername} />
      {username ? (
        <Results username={username} />
      ) : (
        <div className="flex justify-center my-60">
          <h1 className="text-white text-3xl font-thin">
            Search A Github Username
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;