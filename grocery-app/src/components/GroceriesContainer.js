import React, { Component } from "react";

class GroceriesContainer extends Component {
  render() {
    return (
      <div>
        <div className="inputContainer">
          <input
            className="groceryInput"
            type="text"
            placeholder="Add an item"
            maxLength="50"
          ></input>
        </div>
        <div className="ListWrapper">
          <ul className="groceryList"></ul>
        </div>
      </div>
    );
  }
}

export default GroceriesContainer;
