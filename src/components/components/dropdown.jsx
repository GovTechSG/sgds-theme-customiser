import React from "react";

import { Dropdown } from "@govtechsg/sgds-react"

const DropdownComponent = (props) => {
    return (
        <Dropdown className="d-inline-block me-2">
            <Dropdown.Toggle
                style={{
                    backgroundColor: props.bg,
                    border: "1px solid" + props.border,
                    color: props.color
                }}
            >
                {props.text}
                <i className="bi bi-chevron-down"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="/#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="/#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropdownComponent;