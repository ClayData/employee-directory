import React from 'react';


function SearchBox (props) {
        return(
    
        <form>
            <div className="form-row">
                <div className="col-4"></div>
                <div className="col-md-2">
                        <select className="form-control"
                            value={props.value} onChange={props.handleInputChange}>
                            <option value="job">Job</option>
                            <option value="employee">Employee</option>
                            <option value="gender">Gender</option>
                        </select>
                    </div>
                    <div className="col">
                        <input 
                            className='search'
                            type='search'  
                            onChange={props.handleChange }/>
                    </div>
            </div>
    </form>
    
        )
}

export default SearchBox;