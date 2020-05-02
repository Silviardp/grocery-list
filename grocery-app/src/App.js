import React from "react";
import "./App.css";
import GroceriesContainer from "./components/GroceriesContainer";

function App() {
  return (
    <div className="Container">
      <div className="header">
        <h1>Grocery List</h1>
      </div>
      <GroceriesContainer />
    </div>
  );
}

export default App;
