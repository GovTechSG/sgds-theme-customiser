import React from "react";

import { Form, FormCheck } from "@govtechsg/sgds-react"

const FormCheckComponent = (props) => {
    return (
        <Form>
            <FormCheck
                type={props.type}
                label="Default Checkbox"
                inline
            />
            <FormCheck
                type={props.type}
                label="Valid"
                isValid
                inline
            />
            <FormCheck
                type={props.type}
                label="Invalid"
                isInvalid
                inline
            />
        </Form>
    )
}

export default FormCheckComponent;