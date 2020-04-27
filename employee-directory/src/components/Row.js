import React from 'react';

function Row(props) {
    return (
        <tr>
            <td>{props.employee}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>{props.job}</td>
        </tr>
    )
}

export default Row;