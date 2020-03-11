import React, { Component } from "react";
import Button from "./Button";
const axios = require("axios").default;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("A number was submitted: " + this.state.value);
    event.preventDefault();
    /*let url = "https://blog.risingstack.com/";
    axios
      .post("https://your-server.com/your-path", {
        url: "https://url-input-by-user.com"
      })
      .then(function(response) {
        console.log(response);
        //Do your action when success/get response from server
      })
      .catch(function(error) {
        console.log(error);
        //Error handling is here
      });*/
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Number:
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <Button className="submit-button" type="button" innerText="Click me" />
      </form>
    );
  }
}

export default Input;
