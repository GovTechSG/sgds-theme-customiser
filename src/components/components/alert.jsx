import React from "react";

import { Alert } from "@govtechsg/sgds-react"

const AlertComponent = (props) => {
    return (
        <Alert
            style={{
                border: "1px solid" + props.border
            }}
            variant={props.variant}
        >
            <i className="bi bi-exclamation-circle me-2"></i>{props.text}
        </Alert>
    )
}

export default AlertComponent;