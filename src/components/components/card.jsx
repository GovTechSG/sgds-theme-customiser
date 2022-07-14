
import React, { useState } from "react";

import { Card, CloseButton, QuantityToggle, Col } from "@govtechsg/sgds-react";

export function InformationalCard() {
    return (
        <Col md="4">
            <Card>
                <Card.Img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80" />
                <Card.Body>
                    <Card.Title>
                        Informational Card
                    </Card.Title>
                    <Card.Text>
                        This is an informational card. Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export function StretchedLink() {
    return (
        <Col md="4">
            <Card>
                <Card.Img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80" />
                <Card.Body>
                    <Card.StretchedLink href="/#" />
                    <Card.Title>
                        Stretched Link
                    </Card.Title>
                    <Card.Text>
                        This is an informational card with a stretched link. Clicking on this card directs you to somewhere else.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export function QuantityToggleCard() {
    const [count, setCount] = useState(0)

    return (
        <Col md="5">
            <Card variant="card-action-quantity-toggle">
                <Card.Body>
                    <div>
                    <Card.Title as="h4">
                        Quantity Toggle Card
                    </Card.Title>
                    <CloseButton />
                    </div>
                    <div>
                    <Card.Unit>
                        <Card.Subtitle as="h5" className="text-muted">
                            Subtitle
                        </Card.Subtitle>
                        <Card.Subtitle as="h6" className="mt-2">
                            Desc
                        </Card.Subtitle>
                    </Card.Unit>
                    <QuantityToggle count={count} setCount={setCount} aria-label="Quantity" />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}