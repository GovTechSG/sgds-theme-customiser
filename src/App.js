/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

// redux
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import '@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css';
import { SgdsMasthead } from "@govtechsg/sgds-masthead-react"

// elements
import { Navbar, Nav } from '@govtechsg/sgds-react/Nav';
import { Button } from '@govtechsg/sgds-react/Button';
import Body from "./components/body/body";
import FooterComponent from "./components/footer/footer";

// styles
import "./App.scss";

// Register Store
const store = configureStore();

const App = () => {
  const [active, setActive] = useState(0)

  const clickNavItem = (eventKey) => {
    setActive(eventKey)
  }

  return (
    <Provider store={store}>
      <SgdsMasthead />
      <Navbar expand="md">
        <Navbar.Brand href="/">
          <img
            src="https://www.designsystem.gov.sg/assets/img/logo-sgds.svg"
            alt="Main Logo"
            width="150"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainNav" />
        <Navbar.Collapse id="mainNav">
          <Nav className="me-auto" activeKey={active}>
            <Nav.Item>
              <Nav.Link
                onClick={() => clickNavItem(0)}
                eventKey="0"
              >
                Customisor View
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => clickNavItem(1)}
                eventKey="1"
              >
                Template View
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center">
            <Button size="sm" href="https://v2dev.designsystem.gov.sg/" target="_blank">
              SGDS Docs
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Body display={active} />
      <FooterComponent />
    </Provider>
  );
}

export default App;
