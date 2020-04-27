import React from 'react';
import Row from './Row';
import data from './employees.json'

class Table extends React.Component{

    state = {
        data
    }

    render() {
        return(
            <table>
                <tr>
                    <th>Employee</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Job</th>
                </tr>
                {this.state.data.map((data) => (
                    <Row 
                    employee={data.employee}
                    gender={data.gender}
                    key={data.id}
                    age={data.age}
                    job={data.job}
                    />
                ))
                }
            </table>
        )
    }
}

export default Table;