import { cssPresets } from "../cssPresets/cssPresets";

export function getStyles() {

    var variableStart = ":root \r\n { \r\n\t";

    var themePrimaryColor = ""
    if (cssPresets.themePresets.primaryColor !== this.props.themePrimaryColor) {
        themePrimaryColor = "--primary-color: " + this.props.themePrimaryColor + "; \r\n\t"
    }

    var themeSecondaryColor = ""
    if (cssPresets.themePresets.secondaryColor !== this.props.themeSecondaryColor) {
        themeSecondaryColor = "--secondary-color: " + this.props.themeSecondaryColor + "; \r\n\t"
    }

    var infoColor = ""
    if (cssPresets.themePresets.infoColor !== this.props.infoColor) {
        infoColor = "--info-color: " + this.props.infoColor + "; \r\n\t"
    }

    var successColor = ""
    if (cssPresets.themePresets.successColor !== this.props.successColor) {
        successColor = "--success-color: " + this.props.successColor + "; \r\n\t"
    }

    var dangerColor = ""
    if (cssPresets.themePresets.dangerColor !== this.props.dangerColor) {
        dangerColor = "--danger-color: " + this.props.dangerColor + "; \r\n\t"
    }

    var warningColor = ""
    if (cssPresets.themePresets.warningColor !== this.props.warningColor) {
        warningColor = "--warning-color: " + this.props.warningColor + "; \r\n"
    }

    var tableHeadColor = ""
    if (cssPresets.tablePresets.tableHeadColorDefault !== this.props.tableHeadColor) {
        tableHeadColor = "table \r\n { \r\n\t background-color: " + this.props.tableHeadColor + "; \r\n } \r\n"
    }

    var variableEnd = "\r\n } \r\n ";

    var variables = variableStart + themePrimaryColor + themeSecondaryColor + infoColor + successColor + dangerColor + warningColor + variableEnd;

    var primaryButtonStyle = ".sgds-button.is-primary \r\n { \r\n\t background-color: var(--primary-color); \r\n\t color: var(--white); \r\n } \r\n";
    var primaryButtonStyleHover = ".sgds-button.is-primary:hover \r\n { \r\n\t background-color: var(--primary-color-2.5%); \r\n\t color: var(--white); \r\n } \r\n";

    var outlinedButtonStyle = ".sgds-button.is-outlined \r\n { \r\n\tborder-color: var(--primary-color); \r\n\t color: var(--white); \r\n } \r\n";
    var outlinedButtonStyleHover = ".sgds-button.is-outlined:hover \r\n { \r\n\t border-color: var(--primary-color-2.5%); \r\n\t color: var(--white); \r\n } \r\n\t ";

    var style = variables + tableHeadColor + primaryButtonStyle + primaryButtonStyleHover + outlinedButtonStyle + outlinedButtonStyleHover;

    return style;
}