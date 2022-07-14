/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { connect } from "react-redux";

import {Row, Col} from "@govtechsg/sgds-react";

import AccordionComponent from "./accordion";
import BreadcrumbComponent from "./breadcrumb";
import ButtonComponent from "./button";
import { InformationalCard, StretchedLink, QuantityToggleCard } from "./card";
import MainNavComponent from "./mainNavigation";
import TableComponent from "./tableData";
import { HeaderText, BodyText, TextColor, TextStyle } from './typography'

const ComponentList = (props) => {
	const colorArray = {
		"Primary": props.themePrimaryColor,
		"Secondary": props.themeSecondaryColor,
		"Info": props.infoColor,
		"Success": props.successColor,
		"Danger": props.dangerColor,
		"Warning": props.warningColor
	}

	const buttons = Object.entries(colorArray).map( ([name, color]) =>
		<ButtonComponent
			bg={color}
			border={color}
			color="white"
			text={name}
		>
		</ButtonComponent>
	)
	
	const outlineButtons = Object.entries(colorArray).map(([name, color]) =>
		<ButtonComponent
			bg="transparent"
			border={color}
			color={color}
			text={name}
		>
		</ButtonComponent>
	)

	const tableData = Object.values(colorArray).map((color) =>
		<TableComponent bg={color} color="white"></TableComponent>
	)

	const textExamples = Object.values(colorArray).map((color) =>
		<TextColor color={color}></TextColor>
	)

	return (
		<div className="p-6 bg-light">
			{/* Accordion */}
			<h2 className="text-primary mb-4">Accordion</h2>
			<AccordionComponent />
			{/* Accordion */}

			<br /><hr /><br />

			{/* Breadcrumb */}
			<h2 className="text-primary mb-4">Breadcrumb</h2>
			<BreadcrumbComponent />
			{/* Breadcrumb */}

			<br /><hr /><br />

			{/* Buttons */}
			<h2 className="text-primary mb-4">Buttons</h2>
			<div className="mb-2">
				{buttons}
			</div>
			<div className="mb-2">
				{outlineButtons}
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

			{/* Main Navigation */}
				<h2 className="text-primary mb-4">Main Navigation</h2>
				<div className="bg-white">
					<MainNavComponent />
				</div>
			{/* Main Navigation */}

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
