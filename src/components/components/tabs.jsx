import React, { useState } from "react";

import { Tabs, Tab, Badge } from "@govtechsg/sgds-react"

export function DefaultTabs() {
    const [active, setActive] = useState("home")

	const handleClick = (eventKey) => {
		setActive(eventKey)
	}

    return (
        <Tabs defaultActiveKey={active}>
            <Tab eventKey="home" title="Home" onClick={() => handleClick("home")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas maecenas. Diam ut venenatis tellus in metus vulputate eu scelerisque. Magna eget est lorem ipsum dolor sit amet consectetur. Neque ornare aenean euismod elementum. Commodo nulla facilisi nullam vehicula ipsum. Faucibus in ornare quam viverra orci sagittis eu volutpat.
            </Tab>
            <Tab eventKey="profile" title="Profile" onClick={() => handleClick("profile")}>
                Nulla pharetra diam sit amet. Nulla facilisi cras fermentum odio eu. Morbi tristique senectus et netus. Tristique senectus et netus et malesuada fames ac turpis egestas. Cum sociis natoque penatibus et magnis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Volutpat blandit aliquam etiam erat velit scelerisque in. Urna nunc id cursus metus. Scelerisque viverra mauris in aliquam sem. Tincidunt tortor aliquam nulla facilisi.
            </Tab>
            <Tab eventKey="contact" title="Contact" onClick={() => handleClick("contact")}>
                Id interdum velit laoreet id donec. Convallis posuere morbi leo urna molestie at. Enim praesent elementum facilisis leo vel. Dui sapien eget mi proin sed. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Varius vel pharetra vel turpis nunc eget lorem dolor. Augue mauris augue neque gravida in fermentum et sollicitudin. Pellentesque habitant morbi tristique senectus et. In hac habitasse platea dictumst quisque sagittis.
            </Tab>
        </Tabs>
    )
}

export function BasicToggleTabs() {
    const [active, setActive] = useState("home")

	const handleClick = (eventKey) => {
		setActive(eventKey)
	}

    return (
        <Tabs variant="tabs-basic-toggle" defaultActiveKey={active}>
            <Tab eventKey="home" title="Home" contentLeft={<i className="bi bi-house left"></i>} onClick={() => handleClick("home")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas maecenas. Diam ut venenatis tellus in metus vulputate eu scelerisque. Magna eget est lorem ipsum dolor sit amet consectetur. Neque ornare aenean euismod elementum. Commodo nulla facilisi nullam vehicula ipsum. Faucibus in ornare quam viverra orci sagittis eu volutpat.
            </Tab>
            <Tab eventKey="profile" title="Profile" contentRight={<Badge bg="light" text="dark" className="right">99</Badge>} onClick={() => handleClick("profile")}>
                Nulla pharetra diam sit amet. Nulla facilisi cras fermentum odio eu. Morbi tristique senectus et netus. Tristique senectus et netus et malesuada fames ac turpis egestas. Cum sociis natoque penatibus et magnis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Volutpat blandit aliquam etiam erat velit scelerisque in. Urna nunc id cursus metus. Scelerisque viverra mauris in aliquam sem. Tincidunt tortor aliquam nulla facilisi.
            </Tab>
            <Tab eventKey="contact" title="Contact" contentRight={<i className="bi bi-telephone right"></i>} onClick={() => handleClick("contact")}>
                Id interdum velit laoreet id donec. Convallis posuere morbi leo urna molestie at. Enim praesent elementum facilisis leo vel. Dui sapien eget mi proin sed. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Varius vel pharetra vel turpis nunc eget lorem dolor. Augue mauris augue neque gravida in fermentum et sollicitudin. Pellentesque habitant morbi tristique senectus et. In hac habitasse platea dictumst quisque sagittis.
            </Tab>
        </Tabs>
    )
}

export function InfoToggleTabs() {
    const [active, setActive] = useState("home")

	const handleClick = (eventKey) => {
		setActive(eventKey)
	}

    return (
        <Tabs variant="tabs-info-toggle" defaultActiveKey={active}>
            <Tab eventKey="home" title="Home" contentLeft={<i className="bi bi-house left"></i>} contentBottom={99} onClick={() => handleClick("home")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas maecenas. Diam ut venenatis tellus in metus vulputate eu scelerisque. Magna eget est lorem ipsum dolor sit amet consectetur. Neque ornare aenean euismod elementum. Commodo nulla facilisi nullam vehicula ipsum. Faucibus in ornare quam viverra orci sagittis eu volutpat.
            </Tab>
            <Tab eventKey="profile" title="Profile" contentBottom={<Badge bg="light" text="dark" className="right">99</Badge>} onClick={() => handleClick("profile")}>
                Nulla pharetra diam sit amet. Nulla facilisi cras fermentum odio eu. Morbi tristique senectus et netus. Tristique senectus et netus et malesuada fames ac turpis egestas. Cum sociis natoque penatibus et magnis. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Volutpat blandit aliquam etiam erat velit scelerisque in. Urna nunc id cursus metus. Scelerisque viverra mauris in aliquam sem. Tincidunt tortor aliquam nulla facilisi.
            </Tab>
        </Tabs>
    )
}