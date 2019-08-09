/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// redux
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

// elements
import { MainNav } from "sgds-govtech-react";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

// styles
import "./App.scss";

// Register Store
const store = configureStore();

class App extends Component {
  state = {
    showPanel: 0
  };

  selectMenuItem = item => {
    console.log(item);
    if (item === "Template View") {
      this.setState(
        {
          showPanel: 1
        },
        () => console.log(this.state.showPanel)
      );
    } else if (item === "Customiser View") {
      this.setState(
        {
          showPanel: 0
        },
        () => console.log(this.state.showPanel)
      );
    }
  };

  componentDidMount() {
    document.title = "SGDS Theme Customizer";
  }

  render() {
    let mainNavItems = {
      brand: {
        img: "https://www.designsystem.gov.sg/assets/img/logo_sgds.png",
        name: "Brand",
        link: ""
      },
      links: [
        {
          img: "",
          name: "Customiser View"
        },
        {
          img: "",
          name: "Template View"
        }
      ]
    };
    return (
      <Provider store={store}>
        <Header />
        {/* 
        <MainNav>
          <MainNavBrand>
            <MainNavItem href="/">
              <img src="https://www.designsystem.gov.sg/assets/img/logo_sgds.png" alt="..."></img>
            </MainNavItem>
            <MainNavBurger isActive={this.state.isActive} onClick={this.onClickBurger}>
          </MainNavBrand>
          <MainNavMenu isActive={this.state.isActive}>
            <MainNavStart>
              <MainNavItem href="#" onClick="() => this.displayComponent('customiser'))">Customiser</MainNavItem>
              <MainNavItem href="#" onClick="() => this.displayComponent('template')"></MainNavItem>
              <MainNavItem hasDropdown isHoverable href="#" title="A Dropdown Menu">
                <MainNavDropdown>
                  <MainNavItem href='#/'>One A</MainNavItem>
                  <MainNavItem href='#/'>Two B</MainNavItem>
                  <MainNavDivider />
                  <MainNavItem href='#/'>Two A</MainNavItem>
                </MainNavDropdown>
              </MainNavItem>
            </MainNavStart>
            <MainNavEnd>
              <MainNavItem hasDropdown isHoverable isMega href="#" title="A Mega Dropdown">
                <MainNavDropdown>
                  <div className="sgds-container">
                    <div className="row">
                      <div className="col is-3">
                        <MainNavItem subMenu>Sub Menu 1></MainNavItem>
                        <MainNavItem href="#">Sub-item 1a</MainNavItem>
                        <MainNavItem href="#">Sub-item 1b</MainNavItem>
                        <MainNavItem href="#">Sub-item 1c</MainNavItem>
                      </div>
                      <div className="col is-3">
                        <MainNavItem subMenu>Sub Menu 2></MainNavItem>
                        <MainNavItem href="#">Sub-item 2a</MainNavItem>
                        <MainNavItem href="#">Sub-item 2b</MainNavItem>
                        <MainNavItem href="#">Sub-item 2c</MainNavItem>
                      </div>
                      <div className="col is-6">
                        <MainNavItem>
                          <p>
                              <b>Information</b><br />
                              You can put short paragraph
                              of information here to
                              describe about this section.
                          </p>
                        </MainNavItem>
                      </div>
                    </div>
                </MainNavDropdown>
              </MainNavItem>
            </MainNavEnd>
          </MainNavMenu>
        </MainNav>
        */}
        <MainNav
          brand={mainNavItems.brand}
          links={mainNavItems.links}
          selectItem={this.selectMenuItem}
          themePrimaryColor={"#6037B3"}
          isFluid={true}
        />
        <Body display={this.state.showPanel} />
        <Footer />
      </Provider>
    );
  }
}

export default App;
