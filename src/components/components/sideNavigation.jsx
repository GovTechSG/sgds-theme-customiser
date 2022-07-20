import React, { useState } from "react";

import { SideNav } from "@govtechsg/sgds-react"

const SideNavComponent = () => {
    const [active, setActive] = useState("0")

	const handleNavClick = (eventKey) => {
		setActive(eventKey)
	}

    const [subActive, setSubActive] = useState("0-1")

    const handleSubNavClick = (eventKey) => {
        setSubActive(eventKey)
    }

    return (
        <SideNav activeKey={active} activeNavLinkKey={subActive}>
            <SideNav.Item eventKey="0" onClick={() => handleNavClick("0")}>
                <SideNav.Button>Sub menu</SideNav.Button>
                <SideNav.Collapse>
                    <>
                        <SideNav.Link eventKey={"0-1"} href="/#" onClick={() => handleSubNavClick("0-1")}>
                            Sub menu item
                        </SideNav.Link>
                        <SideNav.Link eventKey={"0-2"} href="/#" onClick={() => handleSubNavClick("0-2")}>
                            Sub menu item
                        </SideNav.Link>
                        <SideNav.Link eventKey={"0-3"} href="/#" onClick={() => handleSubNavClick("0-3")}>
                            Sub menu item
                        </SideNav.Link>
                    </>
                </SideNav.Collapse>
            </SideNav.Item>
            <SideNav.Item eventKey="1" onClick={() => handleNavClick("1")}>
                <SideNav.Button>Sub menu</SideNav.Button>
                <SideNav.Collapse>
                    <>
                        <SideNav.Link eventKey={"1-1"} href="/#" onClick={() => handleSubNavClick("1-1")}>
                            Sub menu item
                        </SideNav.Link>
                        <SideNav.Link eventKey={"1-2"} href="/#" onClick={() => handleSubNavClick("1-2")}>
                            Sub menu item
                        </SideNav.Link>
                        <SideNav.Link eventKey={"1-3"} href="/#" onClick={() => handleSubNavClick("1-3")}>
                            Sub menu item
                        </SideNav.Link>
                    </>
                </SideNav.Collapse>
            </SideNav.Item>
            <SideNav.Item eventKey="2" onClick={() => handleNavClick("2")}>
                <SideNav.Button>Sub menu</SideNav.Button>
                <SideNav.Collapse>
                    <>
                        <SideNav.Link eventKey={"2-1"} href="/#" onClick={() => handleSubNavClick("2-1")}>
                            Sub menu item
                        </SideNav.Link>
                        <SideNav.Link eventKey={"2-2"} href="/#" onClick={() => handleSubNavClick("2-1")}>
                            Sub menu item
                        </SideNav.Link>
                        <SideNav.Link eventKey={"2-3"} href="/#" onClick={() => handleSubNavClick("2-1")}>
                            Sub menu item
                        </SideNav.Link>
                    </>
                </SideNav.Collapse>
            </SideNav.Item>
        </SideNav>
    )
}

export default SideNavComponent;