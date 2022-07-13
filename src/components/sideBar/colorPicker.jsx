/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

// Import Color Picker
import { SketchPicker} from "react-color";
import { readability } from 'tinycolor2';

const ColorPicker = (props) => {
  const [showColorPicker, setShowColorPicker] = useState(false)

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker)
  }

  const hideColorPicker = () => {
    setShowColorPicker(false)
  }

  //TODO change individual button font color
  const compareColorName = (colorName) => {
    if(colorName === 'Warning Color'){
      return  '#0f0f0f';
    }else{
      return '#fff';
    }
  }
  
  const colorContrast = (inputColor, colorName) => {
    return readability(inputColor, compareColorName(colorName) ).toFixed(2);
  }

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
      <div className="fw-bold">{props.colorName}
        <small className={colorContrast(props.inputColor, props.colorName) < 4.5 ? 'ps-2 text-danger' : 'ps-2 text-success' }>
          {colorContrast( props.inputColor, props.colorName)}
        </small>
      </div>
      <div className="colorPickerContainer"  onClick={() => toggleColorPicker()}>
        <input
          className="col color me-2"
          type="button"
          value={props.inputColor}
          readOnly
          style={{cursor: "pointer"}}
        />
        <div
          className="color-preview"
          style={{ backgroundColor: props.inputColor }}
        />
      </div>
      
      {showColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={() => hideColorPicker()} />
          <SketchPicker
            color={props.inputColor}
            onChangeComplete={props.changeColor}
            disableAlpha={true}
            presetColors={[]}
          />
        </div>
      ) : null}
      
    </div>
  );
}
export default ColorPicker;
