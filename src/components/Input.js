import React, { Component } from "react";
import Button from "./Button";
import "./Input.css";
const axios = require("axios").default;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      html: []
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let url = "http://localhost:3000/scrape";
    let url2 = "http://localhost:3000/scrape/" + this.state.value;
    axios.post(url, {
      body: { value: this.state.value }
    });
    axios
      .get(url2)
      .then(response => {
        return response.data;
      })

      .then(response => {
        this.setState({
          value: "",
          html: response.message
        });
      })
      .then(data => {
        return data;
      })
      .catch(function(error) {
        console.log(error);
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
              min={1}
              max={5}
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
        <div>
          {Object.values(this.state.html).map((element, index) => {
            return <ul key={index}>{element.headers}</ul>;
          })}
        </div>
      </div>
    );
  }
}

export default Input;
