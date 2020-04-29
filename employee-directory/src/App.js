import React from "react";
import Table from "./components/Table";
import SearchBox from "./components/SearchBox";
import rows from './components/employees.json';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        value: "job",
        searchField: '',
        rows: rows
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleInputChange = e => {
    const value = e.target.value
    this.setState({value: value})
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ searchField: e.target.value})
                    
  }

  render(){  

    const{ rows, searchField } = this.state;
    
    const filteredRows = rows.filter(row => row[this.state.value].toLowerCase().includes(searchField.toLowerCase()))

    return (
    <div className="conatainer">
      <h1 className="text-center">Employee Directory</h1>
      
    <SearchBox 
    handleChange={this.handleChange}
    handleInputChange={this.handleInputChange}
    />
    <Table 
    rows={filteredRows}
    />
    </div>
  )}
}

export default App;
