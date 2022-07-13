import {
  UPDATE_THEME_PRIMARY_COLOR,
  UPDATE_THEME_SECONDARY_COLOR,
  UPDATE_INFO_COLOR,
  UPDATE_SUCCESS_COLOR,
  UPDATE_DANGER_COLOR,
  UPDATE_WARNING_COLOR
} from "./actionTypes";

// Global Colors
export const updateThemePrimaryColor = themePrimaryColor => {
  return {
    type: UPDATE_THEME_PRIMARY_COLOR,
    themePrimaryColor: themePrimaryColor
  };
};

export const updateThemeSecondaryColor = themeSecondaryColor => {
  return {
    type: UPDATE_THEME_SECONDARY_COLOR,
    themeSecondaryColor: themeSecondaryColor
  };
};

export const updateThemeInfoColor = infoColor => {
  return {
    type: UPDATE_INFO_COLOR,
    infoColor: infoColor
  };
};

export const updateThemeSuccessColor = successColor => {
  return {
    type: UPDATE_SUCCESS_COLOR,
    successColor: successColor
  };
};

export const updateThemeDangerColor = dangerColor => {
  return {
    type: UPDATE_DANGER_COLOR,
    dangerColor: dangerColor
  };
};

export const updateThemeWarningColor = warningColor => {
  return {
    type: UPDATE_WARNING_COLOR,
    warningColor: warningColor
  };
};