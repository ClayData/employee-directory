import React from 'react';
import Row from './Row';


function Table (props){    
        return(
            <div className="row">                  
                <table className="table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Job</th>
                        </tr>
                    </thead>
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
            </div>
        )
    
}

export default Table;