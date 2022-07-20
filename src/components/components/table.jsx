
import React from "react";

const TableComponent = (props) => {
    return (
        <tr
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