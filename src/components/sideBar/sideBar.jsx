/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

// Import Presets
import cssPresets from "../../cssPresets/cssPresets";
import elementList from "../../elementList/elementList";

// Import Elements
import ColorPicker from "./colorPicker";

import { HelpModal, HelpModalToggle } from "./help";

import { Button } from "@govtechsg/sgds-react"

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showElement: elementList[0],
      showHelpModal: false,
    };
  }

  handleColorChange = (color, colorCat) => {
    if (colorCat === "prcolor") {
      try {
        this.props.updateThemePrimaryColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "secolor") {
      try {
        this.props.updateThemeSecondaryColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "incolor") {
      try {
        this.props.updateThemeInfoColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "sucolor") {
      try {
        this.props.updateThemeSuccessColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "dacolor") {
      try {
        this.props.updateThemeDangerColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "wacolor") {
      try {
        this.props.updateThemeWarningColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  resetColors = (colorCat) => {
    if (colorCat === "prcolor") {
      try {
        this.props.updateThemePrimaryColor(
          cssPresets.themePresets.primaryColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "secolor") {
      try {
        this.props.updateThemeSecondaryColor(
          cssPresets.themePresets.secondaryColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "incolor") {
      try {
        this.props.updateThemeInfoColor(cssPresets.themePresets.infoColor);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "sucolor") {
      try {
        this.props.updateThemeSuccessColor(
          cssPresets.themePresets.successColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "dacolor") {
      try {
        this.props.updateThemeDangerColor(cssPresets.themePresets.dangerColor);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "wacolor") {
      try {
        this.props.updateThemeWarningColor(
          cssPresets.themePresets.warningColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "resetAll") {
      try {
        this.props.updateThemePrimaryColor(
          cssPresets.themePresets.primaryColor
        );
        this.props.updateThemeSecondaryColor(
          cssPresets.themePresets.secondaryColor
        );
        this.props.updateThemeInfoColor(cssPresets.themePresets.infoColor);
        this.props.updateThemeSuccessColor(
          cssPresets.themePresets.successColor
        );
        this.props.updateThemeDangerColor(cssPresets.themePresets.dangerColor);
        this.props.updateThemeWarningColor(
          cssPresets.themePresets.warningColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };


  //Export css/scss
  // Export style
  exportStyle = (exportcss) => {
    let exportPrimaryColor =
      "$primary: " + this.props.themePrimaryColor + ";\r\n";
    let exportSecondaryColor =
      "$secondary: " + this.props.themeSecondaryColor + ";\r\n";
    let exportInfoColor = "$cyan: " + this.props.infoColor + ";\r\n";
    let exportSuccessColor = "$green: " + this.props.successColor + ";\r\n";
    let exportDangerColor = "$red: " + this.props.dangerColor + ";\r\n";
    let exportWarningColor = "$yellow: " + this.props.warningColor + ";\r\n";

    var style =
      exportPrimaryColor +
      exportSecondaryColor +
      exportInfoColor +
      exportSuccessColor +
      exportDangerColor +
      exportWarningColor;

    var data = new Blob([style], { type: "text/css" });
    var csvURL = window.URL.createObjectURL(data);
    var tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", "_customVariables.scss");
    tempLink.click();
  };

  remove_first_occurrence(str, searchstr) {
    var index = str.indexOf(searchstr);
    if (index === -1) {
      return str;
    }
    return str.slice(0, index) + str.slice(index + searchstr.length);
  }

  // Render Global Picker
  renderGlobalProperties = () => {
    if (this.state.showElement === elementList[0]) {
      return (
        <div className="buttonGroup">
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Primary Color"
              inputColor={this.props.themePrimaryColor}
              changeColor={(event) => this.handleColorChange(event, "prcolor")}
            />
            {this.props.themePrimaryColor ===
            cssPresets.themePresets.primaryColor ? null : (
              <div
                className="resetBtn"
                onClick={() => this.resetColors("prcolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Secondary Color"
              inputColor={this.props.themeSecondaryColor}
              changeColor={(event) => this.handleColorChange(event, "secolor")}
            />
            {this.props.themeSecondaryColor ===
            cssPresets.themePresets.secondaryColor ? null : (
              <div
                className="resetBtn"
                onClick={() => this.resetColors("secolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Info Color"
              inputColor={this.props.infoColor}
              changeColor={(event) => this.handleColorChange(event, "incolor")}
            />
            {this.props.infoColor ===
            cssPresets.themePresets.infoColor ? null : (
              <div
                className="resetBtn"
                onClick={() => this.resetColors("incolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Success Color"
              inputColor={this.props.successColor}
              changeColor={(event) => this.handleColorChange(event, "sucolor")}
            />
            {this.props.successColor ===
            cssPresets.themePresets.successColor ? null : (
              <div
                className="resetBtn"
                onClick={() => this.resetColors("sucolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Danger Color"
              inputColor={this.props.dangerColor}
              changeColor={(event) => this.handleColorChange(event, "dacolor")}
            />
            {this.props.dangerColor ===
            cssPresets.themePresets.dangerColor ? null : (
              <div
                className="resetBtn"
                onClick={() => this.resetColors("dacolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Warning Color"
              inputColor={this.props.warningColor}
              changeColor={(event) => this.handleColorChange(event, "wacolor")}
            />
            {this.props.warningColor ===
            cssPresets.themePresets.warningColor ? null : (
              <div
                className="resetBtn"
                onClick={() => this.resetColors("wacolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  // Render Button Group
  renderButtonGroup = () => {
    if (this.state.showElement === elementList[1]) {
      return (
        <div />
      );
    }
  };

  // Render Typography
  renderTypography = () => {
    if (this.state.showElement === elementList[2]) {
      return (
        <div />
      );
    }
  };

  // Render Tables
  renderTables = () => {
    if (this.state.showElement === elementList[3]) {
      return (
        <div className="buttonGroup">
          <ColorPicker
            colorName="Table Head Color"
            inputColor={this.props.tableHeadColor}
            changeColor={this.handleTableHeadColorUpdate}
          />
          {this.renderSetTableHeadColorDefault()}
          <label className="col is-12 inputTitle">
            <input
              name="tableIsNarrow"
              type="checkbox"
              checked={this.state.tableIsNarrow}
              onChange={this.handleTableIsNarrow}
            />{" "}
            $is-narrow {this.props.tableHeadColorDefault}
          </label>
          <label className="col is-12 inputTitle">
            <input
              name="tableIsHovrable"
              type="checkbox"
              checked={this.state.tableIsHoverable}
              onChange={this.handleTableIsHoverableUpdate}
            />{" "}
            $is-hoverable
          </label>
          <label className="col is-12 inputTitle">
            <input
              name="tableIsFullwidth"
              type="checkbox"
              checked={this.state.tableIsFullwidth}
              onChange={this.handleTableIsFullwidthUpdate}
            />{" "}
            $is-fullwidth
          </label>
        </div>
      );
    }
  };

  // Toggle Element
  toggleElement = (elementName) => {
    this.setState({
      showElement: elementName,
    });
  };

  toggleHelpModal = () => {
    this.setState({
      showHelpModal: !this.state.showHelpModal,
    });
  };

  render() {
    return (
      <div className="sideBar">
        <div className="elements">
          {this.renderGlobalProperties()}
          {this.renderButtonGroup()}
          {this.renderTypography()}
          {this.renderTables()}
          <div className="d-grid p-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={this.exportStyle}
              >
                Export as Sass Variables
              </Button>
              <Button
                size="sm"
                variant="light"
                onClick={() => this.resetColors("resetAll")}
              >
                <u>Reset All</u>
              </Button>

              <HelpModalToggle onToggle={this.toggleHelpModal} />
          </div>
        </div>
        {this.state.showHelpModal && (
          <HelpModal onHide={() => this.setState({ showHelpModal: false })} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themePrimaryColor: state.cssProperties.themePrimaryColor,
    themeSecondaryColor: state.cssProperties.themeSecondaryColor,
    infoColor: state.cssProperties.infoColor,
    successColor: state.cssProperties.successColor,
    dangerColor: state.cssProperties.dangerColor,
    warningColor: state.cssProperties.warningColor,
    tableHeadColor: state.cssProperties.tableHeadColor,
    tableIsNarrow: state.cssProperties.tableIsNarrow,
    tableIsHoverable: state.cssProperties.tableIsHoverable,
    tableIsFullwidth: state.cssProperties.tableIsFullwidth,
  };
};

export default connect(mapStateToProps)(Sidebar);
