import React from "react";

import { ProgressBar } from "@govtechsg/sgds-react"

const ProgressBarComponent = (props) => {
    return (
        <ProgressBar
            now="75"
            variant={props.variant}
            striped={props.striped}
            animated={props.animated}
            className="mb-2"
        ></ProgressBar>
    )
}

export default ProgressBarComponent;