import Link from 'next/link'
import React, { Component } from 'react';
import List from './List_item';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      i: []
    };
  }

  onChange = (event) => {
    this.setState({ a: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      a: '',
      i: [...this.state.i, this.state.a]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.a} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.i} />
      </div>
    );
  }
}

