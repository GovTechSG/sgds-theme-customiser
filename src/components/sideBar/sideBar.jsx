/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

// Import Presets
import cssPresets from "../../cssPresets/cssPresets";
import elementList from "../../elementList/elementList";

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
  updateTableHeadColor,
  updateTableHoverable,
  updateTableFullwidth,
  updateTableNarrow
} from "../../store/actions/index";
// import { statement } from "@babel/template";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showElement: elementList[0],
      // Tables
      tableHeadColor: cssPresets.tablePresets.tableHeadColor,
      tableIsNarrow: cssPresets.tablePresets.tableIsNarrow,
      tableIsHoverable: cssPresets.tablePresets.tableIsHoverable,
      tableIsFullwidth: cssPresets.tablePresets.tableIsFullwidth
    };
  }

  handleTableHeadColorUpdate = color => {
    try {
      this.props.updateTableHeadColor(color.hex);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  handleTableIsHoverableUpdate = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        tableIsHoverable: value
      },
      () => this.props.updateTableHoverable(value)
    );
  };

  handleTableIsFullwidthUpdate = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        tableIsFullwidth: value
      },
      () => this.props.updateTableFullwidth(value)
    );
  };

  handleTableIsNarrow = event => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        tableIsNarrow: value
      },

      () => this.props.updateTableNarrow(value)
    );
  };

  renderSetTableHeadColorDefault = () => {
    if (
      this.props.tableHeadColor !==
      cssPresets.tablePresets.tableHeadColorDefault
    ) {
      return (
        <div
          className="col is-12 resetBtn"
          onClick={() => this.resetTableHeadColerDefault()}
        >
          <a className="is-block margin-bottom">Reset to default</a>
        </div>
      );
    }
  };

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

  resetColors = colorCat => {
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
        this.props.updateThemeSuccessColor(cssPresets.themePresets.successColor);
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
        this.props.updateThemeWarningColor(cssPresets.themePresets.warningColor);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else if (colorCat === "resetAll") {
      try {
        this.props.updateThemePrimaryColor(cssPresets.themePresets.primaryColor);
        this.props.updateThemeSecondaryColor(cssPresets.themePresets.secondaryColor);
        this.props.updateThemeInfoColor(cssPresets.themePresets.infoColor);
        this.props.updateThemeSuccessColor(cssPresets.themePresets.successColor);
        this.props.updateThemeDangerColor(cssPresets.themePresets.dangerColor);
        this.props.updateThemeWarningColor(cssPresets.themePresets.warningColor);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };



  resetTableHeadColerDefault = () => {
    try {
      this.props.updateTableHeadColor(
        cssPresets.tablePresets.tableHeadColorDefault
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  //Export css/scss
  // Export style
  exportStyle = exportcss => {
    // var buttonLarge =
    // 	".button-large \r\n { \r\n\t padding-left: " +
    // 	this.props.buttonLargeHorizontalPadding +
    // 	"px; \r\n\t padding-right: " +
    // 	this.props.buttonLargeHorizontalPadding +
    // 	"px;  \r\n } \r\n";
    // var buttonMedium =
    // 	".button-medium  \r\n { \r\n\t padding-left: " +
    // 	this.props.buttonMediumHorizontalPadding +
    // 	"px; \r\n\t padding-right: " +
    // 	this.props.buttonMediumHorizontalPadding +
    // 	"px; \r\n } \r\n";
    // var buttonSmall =
    // 	".button-small \r\n { \r\n\t padding-left: " +
    // 	this.props.buttonSmallHorizontalPadding +
    // 	"px; \r\n\t padding-right: " +
    // 	this.props.buttonSmallHorizontalPadding +
    // 	"px; \r\n } \r\n";

    // // const displayFontsize = this.props.displayFontsize;
    // // const smallFontsize = this.props.smallFontsize;
    // // const tableHeadColor = this.props.tableHeadColor;
    // // const themePrimaryColor = this.props.themePrimaryColor;

    // var displayFontSize = "";
    // if (
    // 	cssPresets.typographyPresets.displayFontSize !==
    // 	this.props.displayFontsize
    // ) {
    // 	displayFontSize =
    // 		"display \r\n { \r\n\t font-size: " +
    // 		this.props.displayFontsize +
    // 		"px; \r\n } \r\n";
    // }

    // var h1fontSize =
    // 	"h1 \r\n { \r\n\t font-size: " +
    // 	this.props.h1Fontsize +
    // 	"px; \r\n } \r\n";
    // var h2fontSize =
    // 	"h2 \r\n { \r\n\t font-size: " +
    // 	this.props.h2Fontsize +
    // 	"px; \r\n } \r\n";
    // var h3fontSize =
    // 	"h3 \r\n { \r\n\t font-size: " +
    // 	this.props.h3Fontsize +
    // 	"px; \r\n } \r\n";
    // var h4fontSize =
    // 	"h4 \r\n { \r\n\t font-size: " +
    // 	this.props.h4Fontsize +
    // 	"px; \r\n } \r\n";
    // var h5fontSize =
    // 	"h5 \r\n { \r\n\t font-size: " +
    // 	this.props.h5Fontsize +
    // 	"px; \r\n } \r\n";
    // var h6fontSize =
    // 	"h6 \r\n { \r\n\t font-size: " +
    // 	this.props.h6Fontsize +
    // 	"px; \r\n } \r\n";
    // var smallFontsize =
    // 	"small \r\n { \r\n\t font-size: " +
    // 	this.props.smallFontsize +
    // 	"px; \r\n } \r\n";


    let exportPrimaryColor = '$primary: ' + this.props.themePrimaryColor + ';\r\n';
    let exportSecondaryColor = '$secondary: ' + this.props.themeSecondaryColor + ';\r\n';
    let exportInfoColor = '$cyan: ' + this.props.infoColor + ';\r\n';
    let exportSuccessColor = '$green: ' + this.props.successColor + ';\r\n';
    let exportDangerColor = '$red: ' + this.props.dangerColor + ';\r\n';
    let exportWarningColor = '$yellow: ' + this.props.warningColor + ';\r\n';


    var style =
      exportPrimaryColor +
      exportSecondaryColor +
      exportInfoColor +
      exportSuccessColor +
      exportDangerColor +
      exportWarningColor;
    // buttonSmall +
    // buttonMedium +
    // buttonLarge +
    // displayFontSize +
    // h1fontSize +
    // h2fontSize +
    // h3fontSize +
    // h4fontSize +
    // h5fontSize +
    // h6fontSize +
    // smallFontsize;

    console.log(style);

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
              changeColor={event => this.handleColorChange(event, "prcolor")}
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
              changeColor={event => this.handleColorChange(event, "secolor")}
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
              changeColor={event => this.handleColorChange(event, "incolor")}
            />
            {this.props.infoColor === cssPresets.themePresets.infoColor ? null : (
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
              changeColor={event => this.handleColorChange(event, "sucolor")}
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
              changeColor={event => this.handleColorChange(event, "dacolor")}
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
              changeColor={event => this.handleColorChange(event, "wacolor")}
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
          <div className="sgds-buttons margin--top">
            <button className="sgds-button is-secondary is-small" onClick={this.exportStyle} isRounded buttonSize="large">
              Export
            </button>
            <button className="sgds-button is-text is-small" onClick={() => this.resetColors('resetAll')}>
              Reset All
            </button>
          </div>
          {/* <div className="colorpickerCon">
            <ColorPicker
              colorName="Table Head Color"
              inputColor={this.props.tableHeadColor}
              changeColor={this.handleTableHeadColorUpdate}
            />
            {this.renderSetTableHeadColorDefault()}
          </div> */}
        </div>
      );
    }
  };

  // Render Button Group
  renderButtonGroup = () => {
    if (this.state.showElement === elementList[1]) {
      return (
        <div />
        // <div className="buttonGroup">
        //   <div className="col is-12 inputTitle">
        //     $is-small padding left/right
        //   </div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.smallButtonPaddingHorizontal}
        //       onChange={this.handleSmallButtonHorizontalPaddingUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetSmallBtnHorizontalPaddingDefault()}
        //   <div className="col is-12 inputTitle">
        //     $is-small padding top/bottom
        //   </div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.smallButtonPaddingVertical}
        //       onChange={this.handleSmallButtonVerticalPaddingUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetSmallBtnVerticalPaddingDefault()}
        //   <div className="col is-12 inputTitle">
        //     $is-medium padding left/right
        //   </div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.mediumButtonPaddingHorizontal}
        //       onChange={this.handleMediumButtonHorizontalPaddingUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetMediumBtnHorizontalPaddingDefault()}
        //   <div className="col is-12 inputTitle">
        //     $is-medium padding top/bottom
        //   </div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.mediumButtonPaddingVertical}
        //       onChange={this.handleMediumButtonVerticalPaddingUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetMediumBtnVerticalPaddingDefault()}
        //   <div className="col is-12 inputTitle">
        //     $is-large padding left/right
        //   </div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.largeButtonPaddingHorizontal}
        //       onChange={this.handleLargeButtonHorizontalPaddingUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetLargeBtnHorizontalPaddingDefault()}
        //   <div className="col is-12 inputTitle">
        //     $is-large padding top/bottom
        //   </div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.largeButtonPaddingVertical}
        //       onChange={this.handleLargeButtonVerticalPaddingUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetLargeBtnVerticalPaddingDefault()}
        // </div>
      );
    }
  };

  // Render Typography
  renderTypography = () => {
    if (this.state.showElement === elementList[2]) {
      return (
        <div />
        // <div className="buttonGroup">
        //   <div className="col is-12 inputTitle">$display font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.displayFontsize}
        //       onChange={this.handleDisplayFontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetDisplayFontsizeDefault()}
        //   <div className="col is-12 inputTitle">$h1 font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.h1Fontsize}
        //       onChange={this.handleH1FontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetH1FontsizeDefault()}
        //   <div className="col is-12 inputTitle">$h2 font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.h2Fontsize}
        //       onChange={this.handleH2FontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetH2FontsizeDefault()}
        //   <div className="col is-12 inputTitle">$h3 font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.h3Fontsize}
        //       onChange={this.handleH3FontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetH3FontsizeDefault()}
        //   <div className="col is-12 inputTitle">$h4 font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.h4Fontsize}
        //       onChange={this.handleH4FontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetH4FontsizeDefault()}
        //   <div className="col is-12 inputTitle">$h5 font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.h5Fontsize}
        //       onChange={this.handleH5FontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetH5FontsizeDefault()}
        //   <div className="col is-12 inputTitle">$h6 font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.h6Fontsize}
        //       onChange={this.handleH6FontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetH6FontsizeDefault()}
        //   <div className="col is-12 inputTitle">$small font-size</div>
        //   <div className="col is-12">
        //     <input
        //       className="col is-11 inputField"
        //       type="text"
        //       value={this.state.smallFontsize}
        //       onChange={this.handleSmallFontsizeUpdate}
        //       name=""
        //       id=""
        //     />
        //   </div>
        //   {this.renderSetSmallFontsizeDefault()}
        // </div>
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
            $is-narrow {this.props.tableHeadColorDefault}
            <input
              name="tableIsNarrow"
              type="checkbox"
              checked={this.state.tableIsNarrow}
              onChange={this.handleTableIsNarrow}
            />
          </label>
          <label className="col is-12 inputTitle">
            $is-hoverable
            <input
              name="tableIsHovrable"
              type="checkbox"
              checked={this.state.tableIsHoverable}
              onChange={this.handleTableIsHoverableUpdate}
            />
          </label>
          <label className="col is-12 inputTitle">
            $is-fullwidth
            <input
              name="tableIsFullwidth"
              type="checkbox"
              checked={this.state.tableIsFullwidth}
              onChange={this.handleTableIsFullwidthUpdate}
            />
          </label>
        </div>
      );
    }
  };

  // Toggle Element
  toggleElement = elementName => {
    this.setState({
      showElement: elementName
    });
  };

  render() {
    const styleProperties = {
      color: "#6037B3",
      fontWeight: "600"
    };
    return (
      <div className="sideBar">
        <div className="elementList">
          <div
            className="listItem"
            style={
              this.state.showElement === elementList[0] ? styleProperties : null
            }
            onClick={() => this.toggleElement(elementList[0])}
          >
            <a>Global Styles</a>
          </div>
          <div
            className="listItem"
            style={
              this.state.showElement === elementList[1] ? styleProperties : null
            }
            onClick={() => this.toggleElement(elementList[1])}
          >
            <a>Buttons</a>
          </div>
          <div
            className="listItem"
            style={
              this.state.showElement === elementList[2] ? styleProperties : null
            }
            onClick={() => this.toggleElement(elementList[2])}
          >
            <a>Typography</a>
          </div>
          <div
            className="listItem"
            style={
              this.state.showElement === elementList[3] ? styleProperties : null
            }
            onClick={() => this.toggleElement(elementList[3])}
          >
            <a>Tables</a>
          </div>
        </div>
        <div className="elements">
          {this.renderGlobalProperties()}
          {this.renderButtonGroup()}
          {this.renderTypography()}
          {this.renderTables()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
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
    tableIsFullwidth: state.cssProperties.tableIsFullwidth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateThemePrimaryColor: themeSecondaryColor =>
      dispatch(updateThemePrimaryColor(themeSecondaryColor)),
    updateThemeSecondaryColor: themePrimaryColor =>
      dispatch(updateThemeSecondaryColor(themePrimaryColor)),
    updateThemeInfoColor: infoColor =>
      dispatch(updateThemeInfoColor(infoColor)),
    updateThemeSuccessColor: successColor =>
      dispatch(updateThemeSuccessColor(successColor)),
    updateThemeDangerColor: dangerColor =>
      dispatch(updateThemeDangerColor(dangerColor)),
    updateThemeWarningColor: warningColor =>
      dispatch(updateThemeWarningColor(warningColor)),
    updateTableHeadColor: color => dispatch(updateTableHeadColor(color)),
    updateTableNarrow: isNarrow => dispatch(updateTableNarrow(isNarrow)),
    updateTableHoverable: isHoverable =>
      dispatch(updateTableHoverable(isHoverable)),
    updateTableFullwidth: isFullWidth =>
      dispatch(updateTableFullwidth(isFullWidth))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
