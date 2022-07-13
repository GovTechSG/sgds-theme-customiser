import {
  UPDATE_THEME_PRIMARY_COLOR,
  UPDATE_THEME_SECONDARY_COLOR,
  UPDATE_INFO_COLOR,
  UPDATE_SUCCESS_COLOR,
  UPDATE_DANGER_COLOR,
  UPDATE_WARNING_COLOR
} from "../actions/actionTypes";

import cssPresets from "../../cssPresets/cssPresets";

const initialState = {
  themePrimaryColor: cssPresets.themePresets.primaryColor,
  themeSecondaryColor: cssPresets.themePresets.secondaryColor,
  infoColor: cssPresets.themePresets.infoColor,
  successColor: cssPresets.themePresets.successColor,
  dangerColor: cssPresets.themePresets.dangerColor,
  warningColor: cssPresets.themePresets.warningColor
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Global Colors
    case UPDATE_THEME_PRIMARY_COLOR:
      return {
        ...state,
        themePrimaryColor: action.themePrimaryColor
      };
    case UPDATE_THEME_SECONDARY_COLOR:
      return {
        ...state,
        themeSecondaryColor: action.themeSecondaryColor
      };
    case UPDATE_INFO_COLOR:
      return {
        ...state,
        infoColor: action.infoColor
      };
    case UPDATE_SUCCESS_COLOR:
      return {
        ...state,
        successColor: action.successColor
      };
    case UPDATE_DANGER_COLOR:
      return {
        ...state,
        dangerColor: action.dangerColor
      };
    case UPDATE_WARNING_COLOR:
      return {
        ...state,
        warningColor: action.warningColor
      };
    default:
      return state;
  }
};

export default reducer;