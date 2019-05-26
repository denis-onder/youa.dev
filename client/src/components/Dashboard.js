import React, { Component } from "react";
import Navbar from "./imports/Navbar";
import ProfileDrawer from "./imports/ProfileDrawer";
import Store from "../Store";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    Store.checkProfile()
      .then(profile =>
        profile ? this.setState(profile) : (window.location.href = "/")
      )
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div id="dashboard" className="dashboard">
        <Navbar
          profilePicture={this.state.profilePicture}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <ProfileDrawer
          profilePicture={this.state.profilePicture}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      </div>
    );
  }
}
