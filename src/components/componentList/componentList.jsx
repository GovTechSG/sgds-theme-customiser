/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import { connect } from "react-redux";

// Import Elements
// import TableComponent from "../tableComponent/tableComponent";
// import cssPresets from "../../cssPresets/cssPresets";

import {
	MainNav,
	Button,
	Breadcrumb,
	Accordion,
	AccordionSet,
	Card,
	Callout,
	Hero
} from "sgds-govtech-react";

// Import Redux Store
import {
	updateTableHoverable,
	updateTableFullwidth,
	updateThemePrimaryColor
} from "../../store/actions/index";

class ComponentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultButtonText: "Default Button",
			defaultButtonDisabled: false,
			primaryButtonText: "Primary Button",
			primaryButtonDisabled: false
		};
	}
	defaultButtonClicked = () => {
		this.setState({
			defaultButtonText: "Clicked!",
			defaultButtonDisabled: true
		});
		setTimeout(() => {
			this.setState({
				defaultButtonText: "Default Button",
				defaultButtonDisabled: false
			});
		}, 1500);
	};

	primaryButtonClicked = () => {
		this.setState({
			primaryButtonText: "Clicked!",
			primaryButtonDisabled: true
		});
		setTimeout(() => {
			this.setState({
				primaryButtonText: "Default Button",
				primaryButtonDisabled: false
			});
		}, 1500);
	};

	


	mainNavItems = {
		brand: {
			img: "https://www.designsystem.gov.sg/assets/img/logo_sgds.png",
			name: "Brand",
			link: ""
		},
		links: [
			{
				img: "",
				name: "MEGA MENU1",
				subMenuInfo: {
					title: "Sub Menu 1 Info",
					content:
						"You can put short paragraph of information here to describe about this section."
				},
				subMenus: [
					{
						subMenuTitle: "SUB MENU 1A",
						subMenuItems: [
							{
								name: "Sub Link 1",
								link: "#link1"
							},
							{
								name: "Sub Link 2",
								link: "#link1"
							},
							{
								name: "Sub Link 3",
								link: "#link1"
							}
						]
					},
					{
						subMenuTitle: "SUB MENU 1B",
						subMenuItems: [
							{
								name: "SUB MENU 2A",
								link: "#link1"
							},
							{
								name: "SUB MENU 2A",
								link: "#link1"
							},
							{
								name: "SUB MENU 2A",
								link: "#link1"
							}
						]
					}
				]
			},
			{
				img: "",
				name: "Link2",
				sublinks: [
					{
						img: "",
						name: "SubLink2-1"
					},
					{
						img: "",
						name: "SubLink2-2"
					},
					{
						img: "",
						name: "SubLink2-3"
					}
				]
			},
			{
				img: "",
				name: "Link3"
			}
		]
	};

	breadcrumbItems = [
		{
			text: "HOME",
			link: ""
		},
		{
			text: "ITEM1",
			link: ""
		},
		{
			text: "ITEM2",
			link: ""
		}
	];

	hero = {
		defaultHero: {
			title: "design system",
			subtitle:
				"Unites Singapore Government Digital Services around a common UI language and user experience"
		},
		withDropdown: {
			title: "design system",
			subtitle:
				"Unites Singapore Government Digital Services around a common UI language and user experience",
			dropdown: {
				dropdownText: "Click Here",
				dropdownList: [
					"Dropdown item",
					"Other dropdown item",
					"Active dropdown item",
					"Other dropdown item"
				]
			},
			hover: {
				dropdownText: "Hoverable Dropdown",
				dropdownList: [
					"Dropdown item",
					"Other dropdown item",
					"Active dropdown item",
					"Other dropdown item"
				]
			}
		},
		searchButtonText: "Search"
	};

	cardItems = {
		cardTitle: "Card Title",
		carSubTitle: "Card Sub-title",
		button1: {
			text: "Button1",
			link: ""
		},
		button2: {
			text: "Button2",
			link: ""
		}
	};

	callout = {
		title: "Note:",
		excerpt: ["Excerpt 1", "Excerpt 2", "Excerpt 3", "Excerpt 4", "Excerpt 5"]
	};

	// Display the selected item from dropdown list in console
	selectDropdown = item => {
		console.log(item);
	};

	// Display the selected Main Nav item from the main nav in console
	selectMenuItem = item => {
		console.log(item);
	};

	// Display the seard query from hero component in console
	clickSearchButton = searchQuery => {
		console.log(searchQuery);
	};

	render() {
		// const tableHeadColor = this.props.tableHeadColor;
		const themePrimaryColor = this.props.themePrimaryColor;
		// const themeSecondaryColor = this.props.themeSecondaryColor;
		const infoColor = this.props.infoColor;
		return (
			<div className="componentList content">
				<div className="sgds-container is-fluid">
					{/* Buttons */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Buttons</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="sgds-buttons">
								<Button
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Default
                				</Button>
								<Button
									isPrimary={true}
									onClick={this.primaryButtonClicked}
									primaryColor={this.props.themePrimaryColor}
									isDisabled={this.state.primaryButtonDisabled}
								>
									Primary
                				</Button>
								<Button
									isPrimary={true}
									onClick={this.secondaryButtonClicked}
									primaryColor={this.props.themeSecondaryColor}
									isDisabled={this.state.secondaryButtonDisabled}
								>
									Secondary
                				</Button>
								<Button
									isPrimary={true}
									onClick={this.infoButtonClicked}
									primaryColor={this.props.infoColor}
									isDisabled={this.state.infoButtonDisabled}
								>
									Info
                				</Button>
								<Button
									isPrimary={true}
									onClick={this.successButtonClicked}
									primaryColor={this.props.successColor}
									isDisabled={this.state.successButtonDisabled}
								>
									Success
                				</Button>
								<Button
									isPrimary={true}
									onClick={this.dangerButtonClicked}
									primaryColor={this.props.dangerColor}
									isDisabled={this.state.dangerButtonDisabled}
								>
									Danger
                				</Button>
								<Button
									onClick={this.warningButtonClicked}
									primaryColor={this.props.warningColor}
									isDisabled={this.state.warningButtonDisabled}
								>
									Warning
                				</Button>
							</div>
							<div className="sgds-buttons">
								<Button
									isRounded={true}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Default
                				</Button>
								<Button
									isPrimary={true}
									isRounded={true}
									primaryColor={this.props.themePrimaryColor}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Primary
                				</Button>

								<Button
									isPrimary={true}
									isRounded={true}
									primaryColor={this.props.themeSecondaryColor}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Secondary
                				</Button>
								<Button
									isPrimary={true}
									isRounded={true}
									primaryColor={this.props.infoColor}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Info
                				</Button>
								<Button
									isPrimary={true}
									isRounded={true}
									primaryColor={this.props.successColor}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Success
                				</Button>
								<Button
									isPrimary={true}
									isRounded={true}
									primaryColor={this.props.dangerColor}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Danger
                				</Button>
								<Button
									isRounded={true}
									primaryColor={this.props.warningColor}
									onClick={this.defaultButtonClicked}
									isDisabled={this.state.defaultButtonDisabled}
								>
									Warning
                				</Button>
							</div>
						</div>
					</div>
					{/* Buttons */}

					<hr className="margin--top--lg margin--bottom--lg" />

					{/* Nav Bar */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Navigation Bar</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<MainNav
								themePrimaryColor={themePrimaryColor}
								brand={this.mainNavItems.brand}
								links={this.mainNavItems.links}
								selectItem={this.selectMenuItem}
								isFluid={true}
								displaySeardh={true}
							/>
						</div>
					</div>
					{/* Nav Bar */}

					<hr className="margin--top--lg margin--bottom--lg" />

					{/* Typography */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Typography</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p className="has-text-weight-bold">Header Text</p>
							<h1
								className="display"
								style={{ fontSize: this.props.displayFontsize }}
							>
								Display
              				</h1>
							<h1 style={{ fontSize: this.props.h1Fontsize }}>Header 1</h1>
							<h2 style={{ fontSize: this.props.h2Fontsize }}>Header 2</h2>
							<h3 style={{ fontSize: this.props.h3Fontsize }}>Header 3</h3>
							<h4 style={{ fontSize: this.props.h4Fontsize }}>Header 4</h4>
							<h5 style={{ fontSize: this.props.h5Fontsize }}>Header 5</h5>
							<h6 style={{ fontSize: this.props.h6Fontsize }}>Header 6</h6>
						</div>
						<div className="col is-4">
							<p className="has-text-weight-bold">Example Body Text</p>
							<p>
								Nullam quis risus eget urna mollis ornare vel eu leo.{" "}
								<a href="#">Cum sociis natoque penatibus</a> et magnis dis
								parturient montes, nascetur ridiculus mus. Nullam id dolor id
								nibh ultricies vehicula.
              				</p>
						</div>
						<div className="col is-4">
							<p className="has-text-weight-bold">Default Text Color</p>
							<p style={{ color: this.props.themePrimaryColor }}>
								Nullam quis risus eget urna mollis ornare vel eu leo.
              				</p>
							<p style={{ color: this.props.themeSecondaryColor }}>
								Nullam quis risus eget urna mollis ornare vel eu leo.
              				</p>
							<p style={{ color: this.props.successColor }}>
								Nullam quis risus eget urna mollis ornare vel eu leo.
              				</p>
							<p style={{ color: this.props.infoColor }}>
								Nullam quis risus eget urna mollis ornare vel eu leo.
              				</p>
							<p style={{ color: this.props.warningColor }}>
								Nullam quis risus eget urna mollis ornare vel eu leo.
              				</p>
							<p style={{ color: this.props.dangerColor }}>
								Nullam quis risus eget urna mollis ornare vel eu leo.
              				</p>
							<p className="has-text-weight-bold">This is a bold text</p>
							<small style={{ fontSize: this.props.smallFontsize }}>
								This is a small/ caption text
              				</small>
						</div>
					</div>
					{/* Typography */}

					<hr className="margin--top--lg margin--bottom--lg" />

					{/* Tables */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Tables</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<table className="table is-fullwidth">
								<thead>
									<tr>
										<th>Header Field A</th>
										<th>Header Field B</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Data 1A</td>
										<td>Data 1B</td>
									</tr>
									<tr>
										<td>Data 1A</td>
										<td>Data 1B</td>
									</tr>
									<tr
										style={{
											backgroundColor: this.props.themePrimaryColor
										}}
										className="has-text-white"
									>
										<td>Data 1A</td>
										<td>Data 1B</td>
									</tr>
									<tr
										style={{
											backgroundColor: this.props.themeSecondaryColor
										}}
										className="has-text-white"
									>
										<td>Data 2A</td>
										<td>Data 2B</td>
									</tr>
									<tr
										style={{
											backgroundColor: this.props.infoColor
										}}
										className="has-text-white"
									>
										<td>Data 2A</td>
										<td>Data 2B</td>
									</tr>
									<tr
										style={{
											backgroundColor: this.props.warningColor
										}}
										className="has-text-white"
									>
										<td>Data 3A</td>
										<td>Data 3B</td>
									</tr>
									<tr
										style={{
											backgroundColor: this.props.dangerColor
										}}
										className="has-text-white"
									>
										<td>Data 3A</td>
										<td>Data 3B</td>
									</tr>
									<tr
										style={{
											backgroundColor: this.props.successColor
										}}
										className="has-text-white"
									>
										<td>Data 3A</td>
										<td>Data 3B</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					{/* Tables */}

					<hr className="margin--top--lg margin--bottom--lg" />

					{/* Breadcrumb */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Breadcrumb</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<Breadcrumb
								infoColor={infoColor}
								hasBackgroundDark={false}
								hasTextWhite={false}
								items={this.breadcrumbItems}
							/>
							<Breadcrumb
								hasBackgroundDark={true}
								hasTextWhite={true}
								items={this.breadcrumbItems}
							/>
						</div>
					</div>
					{/* Breadcrumb */}
					<hr className="margin--top--lg margin--bottom--lg" />
					{/* Accordion */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Accordion</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<AccordionSet>
								<Accordion header="Click me to reveal/hide my content">
									<p>Hello there!</p>
								</Accordion>
								<Accordion header="Click me to reveal/hide my content">
									<p>Hello there!</p>
								</Accordion>
								<Accordion header="Click me to reveal/hide my content">
									<p>Hello there!</p>
								</Accordion>
							</AccordionSet>
						</div>
					</div>
					{/* Accordion */}
					<hr className="margin--top--lg margin--bottom--lg" />
					{/* Card */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Card</h3>
						</div>
					</div>
					<div className="row">
						<div className="col is-3">
							<Card infoColor={infoColor} card={this.cardItems} />
						</div>
						<div className="col is-3">
							<a href="#!" className="is-media-card">
								<div className="sgds-card" style={{
											backgroundColor: this.props.themePrimaryColor
										}}>
									<div className="sgds-card-content has-text-white">
										<header>
											<div className="padding--bottom">Lorem ipsum</div>
											<h5 className="has-text-weight-bold">
												Lorem ipsum dolor sit amet.
											</h5>
										</header>
										<footer>
											<span>19 oct 2018</span>
											<span className="sgds-icon sgds-icon-download is-size-6"></span>
										</footer>
									</div>
								</div>
							</a>
						</div>
					</div>
					{/* Card */}
					<hr className="margin--top--lg margin--bottom--lg" />
					{/* Callout */}
					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold">Callout</h3>
						</div>
					</div>
					<div className="row">
						<div className="col is-3">
							<Callout callout={this.callout} />
						</div>
					</div>
					{/* Callout */}
					<hr className="margin--top--lg margin--bottom--lg" />
					{/* Hero Banner */}
					<div className="row is-multiline">
						<div className="col is-three-fifths">
							<h3 className="has-text-weight-bold margin--bottom--lg">
								Default Hero Banner
              				</h3>
							<Hero
								color={themePrimaryColor}
								title={this.hero.defaultHero.title}
								subtitle={this.hero.defaultHero.subtitle}
							/>
						</div>
						<div className="col is-three-fifths">
							<h3 className="has-text-weight-bold margin--bottom--lg">
								Hero Banner with Dropdown
              				</h3>
							<Hero
								color={infoColor}
								title={this.hero.withDropdown.title}
								subtitle={this.hero.withDropdown.subtitle}
								showDropdown={true}
								dropdownTitle={this.hero.withDropdown.dropdown.dropdownText}
								dropdownItems={this.hero.withDropdown.dropdown.dropdownList}
								isHoverable={false}
								selectItem={this.selectDropdown}
								showSearch={true}
								searchButtonText={this.hero.searchButtonText}
								clickSearchButton={this.clickSearchButton}
							/>
						</div>
					</div>
					
					<hr className="margin--top--lg margin--bottom--lg" />

					<div className="row">
						<div className="col">
							<h3 className="has-text-weight-bold margin--bottom--lg">
								Notification
              				</h3>
						</div>
					</div>
					<div className="row is-multiline">
						<div className="col is-12">
							<div className="sgds-notification">
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
							<div
								className="sgds-notification"
								style={{ backgroundColor: this.props.themePrimaryColor }}
							>
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content has-text-white">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
						</div>
						<div className="col is-12">
							<div
								className="sgds-notification"
								style={{ backgroundColor: this.props.themeSecondaryColor }}
							>
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content has-text-white">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
						</div>
						<div className="col is-12">
							<div
								className="sgds-notification"
								style={{ backgroundColor: this.props.infoColor }}
							>
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content has-text-white">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
						</div>
						<div className="col is-12">
							<div
								className="sgds-notification"
								style={{ backgroundColor: this.props.successColor }}
							>
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content has-text-white">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
						</div>
						<div className="col is-12">
							<div
								className="sgds-notification"
								style={{ backgroundColor: this.props.warningColor }}
							>
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content has-text-black">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
						</div>
						<div className="col is-12">
							<div
								className="sgds-notification"
								style={{ backgroundColor: this.props.dangerColor }}
							>
								<div className="sgds-notification-detail">
									<div className="sgds-notification-content has-text-white">
										<p className="has-text-weight-bold">Default Notification</p>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Accusamus adipisci aut dicta, ea facere fugit incidunt
											laborum officia quod unde.
                    					</p>
									</div>
									<span className="delete" id="cancel-notification"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* sgds-container */}
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
		// tableHeadColor: state.cssProperties.tableHeadColor,
		// tableIsNarrow: state.cssProperties.tableIsNarrow,
		// tableIsHoverable: state.cssProperties.tableIsHoverable,
		// tableIsFullwidth: state.cssProperties.tableIsFullwidth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// updateTableHeadColor: color => dispatch(updateTableHeadColor(color)),
		updateTableHoverable: isHoverable =>
			dispatch(updateTableHoverable(isHoverable)),
		updateTableFullwidth: isFullWidth =>
			dispatch(updateTableFullwidth(isFullWidth)),
		updateThemePrimaryColor: themePrimaryColor =>
			dispatch(updateThemePrimaryColor(themePrimaryColor))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ComponentList);
