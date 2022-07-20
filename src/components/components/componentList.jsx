/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { connect } from "react-redux";

import {Row, Col} from "@govtechsg/sgds-react";

import AccordionComponent from "./accordion";
import AlertComponent from "./alert";
import { BadgeComponent, WrapperBadge, ButtonBadge } from "./badge";
import BreadcrumbComponent from "./breadcrumb";
import ButtonComponent from "./button";
import { InformationalCard, StretchedLink, QuantityToggleCard } from "./card";
import FormCheckComponent from "./formCheck";
import DropdownComponent from "./dropdown";
import MainNavComponent from "./mainNavigation";
import ProgressBarComponent from "./progressBar";
import SideNavComponent from "./sideNavigation";
import TableComponent from "./table";
import { DefaultTabs, BasicToggleTabs, InfoToggleTabs } from "./tabs"
import ToastComponent from "./toast";
import { HeaderText, BodyText, TextColor, TextStyle } from './typography'

const ComponentList = (props) => {
	const colorArray = {
		"primary": props.themePrimaryColor,
		"secondary": props.themeSecondaryColor,
		"info": props.infoColor,
		"success": props.successColor,
		"danger": props.dangerColor,
		"warning": props.warningColor
	}

	const capitalise = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	const alert = Object.entries(colorArray).map(([name, color]) =>
		<AlertComponent
			key={"alert-" + name}
			border={color}
			variant={name}
			text={capitalise(name) + " Alert"}
		>
		</AlertComponent>
	)

	const defaultBadge = Object.entries(colorArray).map(([name, color]) =>
		<BadgeComponent
			key={"badge-" + name}
			bg={name}
			pill={false}
			text={capitalise(name)}
		>
		</BadgeComponent>
	)

	const pillBadge = Object.entries(colorArray).map(([name, color]) =>
		<BadgeComponent
			key={"badge-pill-" + name}
			bg={name}
			pill={true}
			text={capitalise(name)}
		>
		</BadgeComponent>
	)

	const button = Object.entries(colorArray).map(([name, color]) =>
		<ButtonComponent
			key={"button-" + name}
			bg={color}
			border={color}
			color="white"
			text={capitalise(name)}
		>
		</ButtonComponent>
	)
	
	const outlineButton = Object.entries(colorArray).map(([name, color]) =>
		<ButtonComponent
			key={"button-outline-" + name}
			bg="transparent"
			border={color}
			color={color}
			text={"Outline " + capitalise(name)}
		>
		</ButtonComponent>
	)

	const dropdown = Object.entries(colorArray).map(([name, color]) =>
		<DropdownComponent
			key={"dropdown-" + name}
			bg={color}
			border={color}
			color="white"
			text={capitalise(name)}
		>
		</DropdownComponent>
	)

	const outlineDropdown = Object.entries(colorArray).map(([name, color]) =>
		<DropdownComponent
			key={"dropdown-outline-" + name}
			bg="transparent"
			border={color}
			color={color}
			text={"Outline " + capitalise(name)}
		>
		</DropdownComponent>
	)

	const progressBar = Object.entries(colorArray).map(([name, color]) =>
		<ProgressBarComponent
			key={"progress-bar-" + name}
			variant={name}
			striped={false}
			animated={false}
		>
		</ProgressBarComponent>
	)

	const progressBarStriped = Object.entries(colorArray).map(([name, color]) =>
		<ProgressBarComponent
			key={"progress-bar-striped" + name}
			variant={name}
			striped={true}
			animated={false}
		>
		</ProgressBarComponent>
	)

	const progressBarAnimated = Object.entries(colorArray).map(([name, color]) =>
		<ProgressBarComponent
			key={"progress-bar-striped" + name}
			variant={name}
			striped={false}
			animated={true}
		>
		</ProgressBarComponent>
	)

	const tableData = Object.entries(colorArray).map(([name, color]) =>
		<TableComponent
			key={"table-data-" + name}
			bg={color}
			color="white">
		</TableComponent>
	)

	const toast = ["success", "danger", "warning"].map((name) =>
		<ToastComponent
			key={"toast-" + name}
			status={name}
		>
		</ToastComponent>
	)

	const textExamples = Object.entries(colorArray).map(([name, color]) =>
		<TextColor
			key={"text-example-" + name}
			color={color}>
		</TextColor>
	)

	return (
		<div className="p-6 bg-light">
			{/* Accordion */}
			<h2 className="text-primary mb-4">Accordion</h2>
			<AccordionComponent />
			{/* Accordion */}

			<br /><hr /><br />

			{/* Alert */}
			<h2 className="text-primary mb-4">Alert</h2>
			{alert}
			{/* Alert */}

			<br /><hr /><br />
			
			{/* Badge */}
			<h2 className="text-primary mb-4">Badge</h2>
			<Row className="mb-4">
				<Col className="mb-2">
					<p className="fw-bold">Default Badge</p>
					{defaultBadge}
				</Col>
				<Col className="mb-2">
					<p className="fw-bold">Pill Badge</p>
					{pillBadge}
				</Col>
			</Row>
			<Row>
				<Col className="mb-2">
					<p className="fw-bold">Wrapper Badge</p>
					<WrapperBadge />
				</Col>
				<Col className="mb-2">
					<p className="fw-bold">Button Badge</p>
					<ButtonBadge />
				</Col>
			</Row>
			{/* Badge */}

			<br /><hr /><br />

			{/* Breadcrumb */}
			<h2 className="text-primary mb-4">Breadcrumb</h2>
			<BreadcrumbComponent />
			{/* Breadcrumb */}

			<br /><hr /><br />

			{/* Button */}
			<h2 className="text-primary mb-4">Button</h2>
			<div className="mb-2">
				{button}
			</div>
			<div className="mb-2">
				{outlineButton}
			</div>
			{/* Buttons */}

			<br /><hr /><br />

			{/* Card */}
			<h2 className="text-primary mb-4">Card</h2>
			<Row className="mb-4">
				<InformationalCard />
				<StretchedLink />
			</Row>
			<Row>
				<QuantityToggleCard />
			</Row>
			{/* Card */}

			<br /><hr /><br />

			{/* Checkbox */}
			<h2 className="text-primary mb-4">Checkbox</h2>
			<FormCheckComponent />
			{/* Checkbox */}

			<br /><hr /><br />

			{/* Dropdown */}
			<h2 className="text-primary mb-4">Dropdown</h2>
			<div className="mb-2">
				{dropdown}
			</div>
			<div className="mb-2">
				{outlineDropdown}
			</div>
			{/* Dropdown */}

			<br /><hr /><br />

			{/* Main Navigation */}
			<h2 className="text-primary mb-4">Main Navigation</h2>
			<div className="bg-white">
				<MainNavComponent />
			</div>
			{/* Main Navigation */}

			<br /><hr /><br />

			{/* Progress Bar */}
			<h2 className="text-primary mb-4">Progress Bar</h2>
			<div className="mb-4">
				<p className="fw-bold">Default Progress Bar</p>
				{progressBar}
			</div>
			<div className="mb-4">
				<p className="fw-bold">Striped Progress Bar</p>
				{progressBarStriped}
			</div>
			<div>
				<p className="fw-bold">Animated Progress Bar</p>
				{progressBarAnimated}
			</div>
			{/* Progress Bar */}

			<br /><hr /><br />

			{/* Radio Button */}
			<h2 className="text-primary mb-4">Radio Button</h2>
			<FormCheckComponent type="radio" />
			{/* Checkbox */}

			<br /><hr /><br />

			{/* Side Navigation */}
			<h2 className="text-primary mb-4">Side Navigation</h2>
			<Row>
				<Col className="bg-white p-3" xs="3">
					<SideNavComponent />
				</Col>
			</Row>
			{/* Side Navigation */}

			<br /><hr /><br />

			{/* Tables */}
			<h2 className="text-primary mb-4">Tables</h2>
			<table className="table bg-white">
				<thead>
					<tr>
						<th>Header Field A</th>
						<th>Header Field B</th>
					</tr>
				</thead>
				<tbody>
					<TableComponent />
					{tableData}
				</tbody>
			</table>
			{/* Tables */}

			<br /><hr /><br />

			{/* Tabs */}
			<h2 className="text-primary mb-4">Tabs</h2>
			<div className="mb-4">
				<p className="fw-bold">Default Tabs</p>
				<DefaultTabs />
			</div>
			<div className="mb-4">
				<p className="fw-bold">Basic Toggle Tabs</p>
				<BasicToggleTabs />
			</div>
			<div className="mb-4">
				<p className="fw-bold">Info Toggle Tabs</p>
				<InfoToggleTabs />
			</div>
			{/* Tabs */}

			<br /><hr /><br />

			{/* Toast */}
			<h2 className="text-primary mb-4">Toast</h2>
			{toast}
			{/* Toast */}

			<br /><hr /><br />

			{/* Typography */}
			<h2 className="text-primary mb-4">Typography</h2>
			<Row>
				<Col>
					<p className="fw-bold">Header Text</p>
					<HeaderText />
				</Col>
				<Col>
					<p className="fw-bold">Example Body Text</p>
					<BodyText color={props.infoColor}></BodyText>
				</Col>
				<Col>
					<p className="fw-bold">Default Text Color</p>
					{textExamples}
					<TextStyle />
				</Col>
			</Row>
			{/* Typography */}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		themePrimaryColor: state.cssProperties.themePrimaryColor,
		themeSecondaryColor: state.cssProperties.themeSecondaryColor,
		infoColor: state.cssProperties.infoColor,
		successColor: state.cssProperties.successColor,
		dangerColor: state.cssProperties.dangerColor,
		warningColor: state.cssProperties.warningColor,
	};
};

export default connect(
	mapStateToProps
)(ComponentList);
