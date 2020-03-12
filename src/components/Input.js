import React, { Component } from "react";
import Button from "./Button";
const axios = require("axios").default;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      html: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("A number was submitted: " + this.state.value);
    event.preventDefault();
    let url = "http://localhost:3000/scrape";
    axios
      .get(url)
      .then(response => {
        this.setState({
          ...this.state,
          html: response.data.message
        });
      })
      .then(data => {
        return data;
      })
      //Do your action when success/get response from server

      .catch(function(error) {
        console.log(error);
        //Error handling is here
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number:
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <Button
            className="submit-button"
            type="button"
            innerText="Click me"
          />
        </form>
        <textarea value={this.state.html}></textarea>
      </div>
    );
  }
}

export default Input;
