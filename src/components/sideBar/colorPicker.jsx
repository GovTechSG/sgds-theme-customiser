/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Import Color Picker
import { SketchPicker} from "react-color";
import { readability } from 'tinycolor2';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { showColorPicker: false };
  }
  toggleColorPicker() {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  }
  hideColorPicker() {
    this.setState({ showColorPicker: false });
  }

  //TODO change individual button font color
  compareColorName(colorName){
    if(colorName === 'Warning Color' || colorName === 'Table Head Color'){
      return  '#0f0f0f';
    }else{
      return '#fff';
    }
  }
  
  colorContrast(inputColor, colorName){
    return readability(inputColor, this.compareColorName(colorName) ).toFixed(2);
  }

  render() {
    const popover = {
      position: "absolute",
      zIndex: "2"
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };
    return (
      <div className="colorPicker">
        <div className="fw-bold">{this.props.colorName}
          <small className={this.colorContrast(this.props.inputColor, this.props.colorName) < 4.5 ? 'ps-2 text-danger' : 'ps-2 text-success' }>
            {this.colorContrast( this.props.inputColor, this.props.colorName)}
          </small>
        </div>
        <div className="colorPickerContainer"  onClick={() => this.toggleColorPicker()}>
          <input
            className="col color me-2"
            type="button"
            value={this.props.inputColor}
            readOnly
            style={{cursor: "pointer"}}
          />
          <div
            className="color-preview"
            style={{ backgroundColor: this.props.inputColor }}
          />
        </div>
        
        {this.state.showColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={() => this.hideColorPicker()} />
            <SketchPicker
              color={this.props.inputColor}
              onChangeComplete={this.props.changeColor}
              disableAlpha={true}
              presetColors={[]}
            />
          </div>
        ) : null}
        
      </div>
    );
  }
}
export default ColorPicker;
