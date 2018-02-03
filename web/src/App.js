import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    input: "Type something...",
    result: "To get started, edit src/App.js and save to reload."
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleClick = async (e,type) => {
    this.setState({
      loading: true
    });

    const response = await fetch(`http://localhost:8080/api/${type}/` + this.state.input);
    const result = await response.json();

    this.setState({
      result: result,
      loading: false
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button onClick={e => this.handleClick(e,'reverse')} disabled={this.state.loading}>
              {this.state.loading ? "Loading..." : "Call reverse API"}
            </button>
            <button onClick={e => this.handleClick(e,'lowercase')} disabled={this.state.loading}>
              {this.state.loading ? "Loading..." : "Call lowercase API"}
            </button>
          </div>
        </div>
        <p className="App-intro">
          {this.state.result}
        </p>
      </div>
    );
  }
}

export default App;
