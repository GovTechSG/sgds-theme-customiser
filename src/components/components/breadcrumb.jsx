
import React from "react";

import { Breadcrumb } from "@govtechsg/sgds-react";

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/#">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/#">
                Item 1
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Item 2
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbComponent;