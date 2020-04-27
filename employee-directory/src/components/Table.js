import React from 'react';
import Row from './Row';
import data from './employees.json'

function Table (props){    
        return(
            <table>
                <tr>
                    <th>Employee</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Job</th>
                </tr>
                {props.rows.map((row) => (
                    <Row 
                    employee={row.employee}
                    gender={row.gender}
                    key={row.id}
                    age={row.age}
                    job={row.job}
                    />
                ))
                }
            </table>
        )
    
}

export default Table;