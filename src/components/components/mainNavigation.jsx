import React, { useState } from "react";

import { Nav, Navbar, NavDropdown, Container, Row, Col } from "@govtechsg/sgds-react"

const MainNavComponent = () => {
    const [active, setActive] = useState(0)

	const handleNavClick = (eventKey) => {
		setActive(eventKey)
	}

	const sublinks = [...Array(3)].map((x, i) => 
		<NavDropdown.Item
            key={i}
			href="/#"
		>
			Sublink
		</NavDropdown.Item>
	)

    return (
        <Navbar expand="md">
            <Navbar.Brand href="/#">
                <img
                src="https://www.designsystem.gov.sg/assets/img/logo-sgds.svg"
                alt="Main Logo"
                width="150"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation" />
            <Navbar.Collapse id="navigation">
                <Nav className="me-auto" activeKey={active}>
                    <NavDropdown
                        isMegaMenu
                        title="Megamenu"
                        href="/#"
                        eventKey="1"
                        onClick={() => handleNavClick("1")}
                    >
                        <Container>
                            <Row>
                                <Col>
                                    <b>Sub Menu</b>
                                </Col>
                                <Col>
                                    <b>Sub Menu</b>
                                </Col>
                                <Col>
                                    <b>Sub Menu Info</b>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {sublinks}
                                </Col>
                                <Col>
                                    {sublinks}
                                </Col>
                                <Col>
                                    You can put short paragraph of information here to describe about this section.
                                </Col>
                            </Row>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title="Dropdown"
                        href="/#"
                        eventKey="2"
                        onClick={() => handleNavClick("2")}
                    >
                        {sublinks}
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link
                            href="/#"
                            eventKey="3"
                            onClick={() => handleNavClick("3")}
                        >
                            Link
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavComponent;