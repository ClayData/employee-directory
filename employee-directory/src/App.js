import React from "react";
import Table from "./components/Table";
import SearchBox from "./components/SearchBox";
import rows from './components/employees.json';
// import DropDown from './components/DropDown';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        value: 'job',
        searchField: '',
        rows: rows
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ searchField: e.target.value,
                    value: e.target.value})
  }

  render(){  

    const{ rows, searchField } = this.state;
    
    const filteredRows = rows.filter(row => row.job.toLowerCase().includes(searchField.toLowerCase()))

    return (
    <div className="conatainer">
      <h1 className="text-center">Employee Directory</h1>
      
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
