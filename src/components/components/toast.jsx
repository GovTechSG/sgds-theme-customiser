import React from "react";

import { Toast } from "@govtechsg/sgds-react"

const ToastComponent = (props) => {
    return (
    <Toast
        status={props.status}
        className="mb-2"
    >
      <Toast.Header>
        <i className="bi bi-check-circle me-2"></i>
        <strong className="me-auto">Title</strong>
      </Toast.Header>
      <Toast.Body>This is a toast message.</Toast.Body>
    </Toast>
    )
}

export default ToastComponent;