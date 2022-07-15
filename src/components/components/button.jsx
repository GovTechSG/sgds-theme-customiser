import React from "react";

import { Button } from "@govtechsg/sgds-react"

const ButtonComponent = (props) => {
    return (
        <Button
            style={{
                backgroundColor: props.bg,
                border: "1px solid" + props.border,
                color: props.color
            }}
            className="mb-2 me-2"
        >
            {props.text}
        </Button>
    )
}

export default ButtonComponent;