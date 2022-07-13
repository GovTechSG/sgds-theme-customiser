/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { connect } from "react-redux";

// Import Presets
import cssPresets from "../../cssPresets/cssPresets";

// Import Elements
import ColorPicker from "./colorPicker";

// Import Redux Store
import {
  updateThemePrimaryColor,
  updateThemeSecondaryColor,
  updateThemeInfoColor,
  updateThemeSuccessColor,
  updateThemeDangerColor,
  updateThemeWarningColor,
} from "../../store/actions/index";

import { HelpModal, HelpModalToggle } from "./help";

import { Button } from "@govtechsg/sgds-react"

const Sidebar = (props) => {
  const [showHelpModal, setShowHelpModal] = useState(false)

  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal)
  };

  const handleColorChange = (color, colorCat) => {
    if (colorCat === "prcolor") {
      try {
        props.updateThemePrimaryColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "secolor") {
      try {
        props.updateThemeSecondaryColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "incolor") {
      try {
        props.updateThemeInfoColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "sucolor") {
      try {
        props.updateThemeSuccessColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "dacolor") {
      try {
        props.updateThemeDangerColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "wacolor") {
      try {
        props.updateThemeWarningColor(color.hex);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  const resetColors = (colorCat) => {
    if (colorCat === "prcolor") {
      try {
        props.updateThemePrimaryColor(
          cssPresets.themePresets.primaryColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "secolor") {
      try {
        props.updateThemeSecondaryColor(
          cssPresets.themePresets.secondaryColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "incolor") {
      try {
        props.updateThemeInfoColor(cssPresets.themePresets.infoColor);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "sucolor") {
      try {
        props.updateThemeSuccessColor(
          cssPresets.themePresets.successColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "dacolor") {
      try {
        props.updateThemeDangerColor(cssPresets.themePresets.dangerColor);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "wacolor") {
      try {
        props.updateThemeWarningColor(
          cssPresets.themePresets.warningColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "resetAll") {
      try {
        props.updateThemePrimaryColor(
          cssPresets.themePresets.primaryColor
        );
        props.updateThemeSecondaryColor(
          cssPresets.themePresets.secondaryColor
        );
        props.updateThemeInfoColor(cssPresets.themePresets.infoColor);
        props.updateThemeSuccessColor(
          cssPresets.themePresets.successColor
        );
        props.updateThemeDangerColor(cssPresets.themePresets.dangerColor);
        props.updateThemeWarningColor(
          cssPresets.themePresets.warningColor
        );
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  //Export css/scss
  // Export style
  const exportStyle = (exportcss) => {
    let exportPrimaryColor =
      "$primary: " + props.themePrimaryColor + ";\r\n";
    let exportSecondaryColor =
      "$secondary: " + props.themeSecondaryColor + ";\r\n";
    let exportInfoColor = "$cyan: " + props.infoColor + ";\r\n";
    let exportSuccessColor = "$green: " + props.successColor + ";\r\n";
    let exportDangerColor = "$red: " + props.dangerColor + ";\r\n";
    let exportWarningColor = "$yellow: " + props.warningColor + ";\r\n";

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

  return (
    <div className="sideBar">
      <div className="elements">
        <div className="buttonGroup">
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Primary Color"
              inputColor={props.themePrimaryColor}
              changeColor={(event) => handleColorChange(event, "prcolor")}
            />
            {props.themePrimaryColor ===
            cssPresets.themePresets.primaryColor ? null : (
              <div
                className="resetBtn"
                onClick={() => resetColors("prcolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Secondary Color"
              inputColor={props.themeSecondaryColor}
              changeColor={(event) => handleColorChange(event, "secolor")}
            />
            {props.themeSecondaryColor ===
            cssPresets.themePresets.secondaryColor ? null : (
              <div
                className="resetBtn"
                onClick={() => resetColors("secolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Info Color"
              inputColor={props.infoColor}
              changeColor={(event) => handleColorChange(event, "incolor")}
            />
            {props.infoColor ===
            cssPresets.themePresets.infoColor ? null : (
              <div
                className="resetBtn"
                onClick={() => resetColors("incolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Success Color"
              inputColor={props.successColor}
              changeColor={(event) => handleColorChange(event, "sucolor")}
            />
            {props.successColor ===
            cssPresets.themePresets.successColor ? null : (
              <div
                className="resetBtn"
                onClick={() => resetColors("sucolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Danger Color"
              inputColor={props.dangerColor}
              changeColor={(event) => handleColorChange(event, "dacolor")}
            />
            {props.dangerColor ===
            cssPresets.themePresets.dangerColor ? null : (
              <div
                className="resetBtn"
                onClick={() => resetColors("dacolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
          <div className="colorpickerCon">
            <ColorPicker
              colorName="Warning Color"
              inputColor={props.warningColor}
              changeColor={(event) => handleColorChange(event, "wacolor")}
            />
            {props.warningColor ===
            cssPresets.themePresets.warningColor ? null : (
              <div
                className="resetBtn"
                onClick={() => resetColors("wacolor")}
              >
                <a className="is-block margin-bottom">Reset to default</a>
              </div>
            )}
          </div>
        </div>
        <div className="d-grid p-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={exportStyle}
            >
              Export as Sass Variables
            </Button>
            <Button
              size="sm"
              variant="light"
              onClick={() => resetColors("resetAll")}
            >
              <u>Reset All</u>
            </Button>

            <HelpModalToggle onToggle={toggleHelpModal} />
        </div>
      </div>
      {showHelpModal && (
        <HelpModal onHide={() => toggleHelpModal()} />
      )}
    </div>
  );
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateThemePrimaryColor: (themeSecondaryColor) =>
      dispatch(updateThemePrimaryColor(themeSecondaryColor)),
    updateThemeSecondaryColor: (themePrimaryColor) =>
      dispatch(updateThemeSecondaryColor(themePrimaryColor)),
    updateThemeInfoColor: (infoColor) =>
      dispatch(updateThemeInfoColor(infoColor)),
    updateThemeSuccessColor: (successColor) =>
      dispatch(updateThemeSuccessColor(successColor)),
    updateThemeDangerColor: (dangerColor) =>
      dispatch(updateThemeDangerColor(dangerColor)),
    updateThemeWarningColor: (warningColor) =>
      dispatch(updateThemeWarningColor(warningColor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
