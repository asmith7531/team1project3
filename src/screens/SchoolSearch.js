import React, { Component } from "react";
import NavBar from "../components/NavBar";
import M from "materialize-css";
export default class SchoolSearch extends Component {
  componentDidMount() {
    var elem = document.querySelector(".autocomplete");
    var instance = M.Autocomplete.init(elem);
  }
  render() {
    return (
      <>
        <NavBar />
        <div className='container'>
        <form class="col s12 card-panel">
          <div class="row">
            <div class="input-field col s5">
              <input
                id="first_name"
                type="text"
                class="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
        
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
         
        </form>
        </div>
      </>
    );
  }
}
