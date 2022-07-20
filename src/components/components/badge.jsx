import React from "react";

import { Badge, Button } from "@govtechsg/sgds-react"

export function BadgeComponent(props) {
    return (
        <Badge
            bg={props.bg}
            pill={props.pill}
            className="me-2"
        >
            {props.text}
        </Badge>
    )
}

export function WrapperBadge() {
    return (
        <div>
            <h1>H1 Header <Badge>Badge</Badge></h1>
            <h2>H2 Header <Badge>Badge</Badge></h2>
            <h3>H3 Header <Badge>Badge</Badge></h3>
            <h4>H4 Header <Badge>Badge</Badge></h4>
            <h5>H5 Header <Badge>Badge</Badge></h5>
            <p>Paragraph <Badge>Badge</Badge></p>
        </div>
    )
}

export function ButtonBadge() {
    return (
        <div>
            <Button className="mb-4 me-4">Button <Badge bg="danger">99</Badge></Button>
            <Button className="position-relative mb-4 me-4">
                Button <Badge textIndicator bg="danger">99</Badge>
            </Button>
            <Button className="position-relative mb-4">
                Button <Badge dotIndicator bg="danger"></Badge>
            </Button>
        </div>
    )
}