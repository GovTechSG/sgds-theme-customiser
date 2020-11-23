/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// redux
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

// elements
import {
  MainNav,
  MainNavBrand,
  MainNavBurger,
  MainNavItem,
  MainNavMenu,
  MainNavMenuStart,
  MainNavMenuEnd,
} from "sgds-govtech-react/dist/standard";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

// styles
import "./App.scss";

// Register Store
const store = configureStore();

class App extends Component {
  state = {
    showPanel: 0,
    showNavMenu: false,
  };

  selectMenuItem = (item) => {
    console.log(item);
    if (item === "Template View") {
      this.setState({
        showPanel: 1,
      });
    } else if (item === "Customiser View") {
      this.setState({
        showPanel: 0,
      });
    }
  };

  toggleNavMenu = () => {
    this.setState((state) => {
      return {
        showNavMenu: !state.showNavMenu,
      };
    });
  };

  componentDidMount() {
    document.title = "SGDS Theme Customizer";
  }

  render() {
    return (
      <Provider store={store}>
        {/* <Masthead hasMaxWidth={false}/> */}
        <div className="sgds-masthead">
          <div className="sgds-container is-fluid">
            <div className="row">
              <div className="col">
                <a
                  href="https://www.gov.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sgds-icon sgds-icon-sg-crest"></span>
                  <span className="is-text">
                    A Singapore Government Agency Website
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <MainNav isFluid>
          <MainNavBrand>
            <MainNavItem href="/">
              <img
                src="https://www.designsystem.gov.sg/assets/img/logo_sgds.png"
                alt="main logo"
              />
            </MainNavItem>
            <MainNavBurger
              onClick={this.toggleNavMenu}
              expand={this.state.showNavMenu}
            />
          </MainNavBrand>
          <MainNavMenu expand={this.state.showNavMenu}>
            <MainNavMenuStart>
              <MainNavItem
                href="#!"
                isUpperCase
                isTab
                onClick={() => this.selectMenuItem("Customiser View")}
                isActive={this.state.showPanel === 0}
              >
                Customiser view
              </MainNavItem>
              <MainNavItem
                href="#!"
                isUpperCase
                isTab
                onClick={() => this.selectMenuItem("Template View")}
                isActive={this.state.showPanel === 1}
              >
                Template view
              </MainNavItem>
            </MainNavMenuStart>
            <MainNavMenuEnd>
              <div
                className="sgds-navbar-item"
                style={{ display: "flex", alignItems: "center" }}
              >
                <a
                  href="https://designsystem.gov.sg/docs"
                  className="sgds-button is-small is-rounded is-primary"
                >
                  SGDS Docs{" "}
                  <span className="sgds-icon sgds-icon-external"></span>
                </a>
              </div>
            </MainNavMenuEnd>
          </MainNavMenu>
        </MainNav>
        <Body display={this.state.showPanel} />
        <Footer />
      </Provider>
    );
  }
}

export default App;
