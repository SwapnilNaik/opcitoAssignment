import React, { Component } from "react";
import { Item } from "./Items";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ["First Name", "Last Name", "Age", "Email", "Addresss"],
      deleted: false
    };
  }

  addItem(event) {
    let currentItems = this.state.items;
    let textBox = event.target.previousElementSibling;

    if (textBox.value) {
      currentItems.push(textBox.value);
      textBox.value = "";

      this.setState({
        items: currentItems
      });
    }
  }

  removeItem(event) {
    let currentItem = event.target.textContent;
    let updatedItems = this.state.items.filter((item) => {
      return currentItem !== item;
    });

    this.setState({
      items: updatedItems
    });

    !this.state.deleted &&
      this.setState({
        deleted: true
      });
  }

  render() {
    let cssItem = "item";
    let cssCounter = "more-three";
    let Items = this.state.items.map((item, i) => {
      return (
        <li
          onClick={this.removeItem.bind(this)}
          className={cssItem}
          key={cssItem + i}
        >
          {item}
        </li>
      );
    });

    return (
      <div className="items-list">
        <nav className="nav-add">
          <input type="text" id="input-add" />
          <button id="new-item" onClick={this.addItem.bind(this)}>
            New attribute
          </button>
        </nav>
        <p>{this.state.deleted && "Item Deleted!"}</p>
        <p className={cssCounter}>
          <b>Count of Items:</b> {this.state.items.length}
        </p>
        <ul>{Items}</ul>
      </div>
    );
  }
}

export { Details };
