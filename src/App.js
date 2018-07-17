import React, { Component } from 'react';
import list from 'eiv-dictionary';
import Table from './Table';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      list
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    const { query, list } = this.state;

    return (
      <div className="app">
        <Input value={query} onChange={this.handleChange} />
        <Table>
          {(query)?
            list.filter(row => (
              row.some(item => item.indexOf(query) !== -1)
            )) :
            list
          }
        </Table>
      </div>
    );
  }
}

export default App;
