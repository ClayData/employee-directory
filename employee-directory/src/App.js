import React from "react";
import Table from "./components/Table";
import { SearchBox } from "./components/SearchBox";
import rows from './components/employees.json'


class App extends React.Component {

  state = {
    searchField: '',
    rows: rows
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render(){  

    const{ rows, searchField } = this.state;
    const filteredRows = rows.filter(row => row.job.toLowerCase().includes(searchField.toLowerCase()))

    return (
    <div className="conatainer">
    <SearchBox 
    handleChange={this.handleChange}
    />
    <Table 
    rows={filteredRows}
    />
    </div>
  )}
}

export default App;
