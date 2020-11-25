import React from "react";

function DataBody(props) {

    return (
        <tr>
            <th scope="row"><img src={props.photo} alt={`${props.empName}`} /></th>
            <td>{props.empName}</td>
            <td>{props.address}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    )
};

export default DataBody;