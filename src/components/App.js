import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
   const [id, setId] = useState(false)
  return (
    <div id="main">
      <button id="click" onClick={() => setId(true)}>display</button>
            <>
                {
                    id ? <div id ="para">
                        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
                    </div> : null
                }
            </>
    </div>
  );
}


export default App;
