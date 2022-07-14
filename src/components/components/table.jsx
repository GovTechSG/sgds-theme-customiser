
import React from "react";

const TableComponent = (props) => {
    return (
        <tr
            key={props.bg}
            style={{
                backgroundColor: props.bg,
                color: props.color
            }}
        >
            <td>Data A</td>
            <td>Data B</td>
        </tr>
    )
}

export default TableComponent;