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
  return (
    <Provider store={store}>
      <SgdsMasthead />
      <Navbar className="justify-content-between">
        <Navbar.Brand href="/">
          <img
            src="https://www.designsystem.gov.sg/assets/img/logo-sgds.svg"
            alt="Main Logo"
            width="150"
          />
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <Button size="sm" href="https://v2dev.designsystem.gov.sg/" target="_blank">
            SGDS Docs
          </Button>
        </div>
      </Navbar>
      <Body />
      <FooterComponent />
    </Provider>
  );
}

export default App;
