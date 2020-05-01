import React from 'react';

function Row(props) {
    return (
        <tbody>
        <tr>
            <td>{props.employee}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>{props.job}</td>
        </tr>
        </tbody>
    )
}

export default Row;