import React from 'react';
import row from './employees.json';

function SearchBox (props) {
        return(
    <div>
        <form>
    <select className="form-control"
            value={props.value} onChange={props.handleInputChange}>
            <option value="job">Job</option>
            <option value="employee">Employee</option>
            <option value="gender">Gender</option>
        </select>
    <input 
        className='search'
        type='search'  
        onChange={props.handleChange }/>
    </form>
    </div>
        )
}

export default SearchBox;