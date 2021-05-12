import React, { Component } from "react";
import { increment } from "../../../redux/reducer";
import { connect } from "react-redux";
import "./SideBar.css";

//wRITE and this affects how we use connect

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <img className="sidebar-img" src="./newspaper.png" alt="" />
        <h3>News Today</h3>
        <hr />
        <p>
          <a href="/#/hacker-news">Hacker News</a>
        </p>
        <p>
          <a href="/#/medium">Medium</a>
        </p>
        <p>
          <a href="/#/reddit">Reddit</a>
        </p>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increment,
};

export default connect(
  undefined,
  mapDispatchToProps
)(SideBar); //undefined to placehold for mapStateToProps

//argument 1 - mapStateToProps - Reading from the store

//arugment 2 - mapDispatchToProps - Writing to the store
