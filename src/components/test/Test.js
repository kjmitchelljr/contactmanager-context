import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default Test;
