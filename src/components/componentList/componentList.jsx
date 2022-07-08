/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import { connect } from "react-redux";

// Import Elements
// import TableComponent from "../tableComponent/tableComponent";
// import cssPresets from "../../cssPresets/cssPresets";

import {
	Nav,
	Navbar,
	NavDropdown,
	Button,
	Breadcrumb,
	Accordion,
	Card,
	Row,
	Col,
	Container,
} from "@govtechsg/sgds-react";

// Import Redux Store
import {
	updateTableHoverable,
	updateTableFullwidth,
	updateThemePrimaryColor
} from "../../store/actions/index";

class ComponentList extends Component {
	render() {
		return (
			<div className="p-6 bg-light">
					{/* Buttons */}
					<div>
						<h2 className="text-primary mb-4">Buttons</h2>
						<div className="mb-2">
							<Button
								style={{ backgroundColor: this.props.themePrimaryColor, border: "1px solid" + this.props.themePrimaryColor }}
								className="me-2"
							>
								Primary
							</Button>
							<Button
								style={{ backgroundColor: this.props.themeSecondaryColor, border: "1px solid" + this.props.themeSecondaryColor }}
								className="me-2"
							>
								Secondary
							</Button>
							<Button
								style={{ backgroundColor: this.props.infoColor, border: "1px solid" + this.props.infoColor }}
								className="me-2"
							>
								Info
							</Button>
							<Button
								style={{ backgroundColor: this.props.successColor, border: "1px solid" + this.props.successColor }}
								className="me-2"
							>
								Success
							</Button>
							<Button
								style={{ backgroundColor: this.props.dangerColor, border: "1px solid" + this.props.dangerColor }}
								className="me-2"
							>
								Danger
							</Button>
							<Button
								style={{ backgroundColor: this.props.warningColor, color: "black", border: "1px solid" + this.props.warningColor }}
								className="me-2"
							>
								Warning
							</Button>
						</div>
					</div>
					{/* Buttons */}

					<br /><hr /><br />

					{/* Nav Bar */}
					<div>
						<h2 className="text-primary mb-4">Navigation Bar</h2>
						<div className="bg-white">
							<Navbar expand="md">
								<Navbar.Brand href="">
									<img
									src="https://www.designsystem.gov.sg/assets/img/logo-sgds.svg"
									alt="Main Logo"
									width="150"
									/>
								</Navbar.Brand>
								<Navbar.Toggle aria-controls="navigation" />
								<Navbar.Collapse id="navigation">
									<Nav className="me-auto" defaultActiveKey="1">
										<NavDropdown
											isMegaMenu
											title="Megamenu"
											href=""
											eventKey="1"
										>
											<Container>
												<Row>
													<Col>
														<b>Sub Menu 1</b>
													</Col>
													<Col>
														<b>Sub Menu 2</b>
													</Col>
													<Col>
														<b>Sub Menu Info</b>
													</Col>
												</Row>
												<Row>
													<Col>
														<NavDropdown.Item
															href=""
														>
															Sublink 1A
														</NavDropdown.Item>
														<NavDropdown.Item
															href=""
														>
															Sublink 1B
														</NavDropdown.Item>
														<NavDropdown.Item
															href=""
														>
															Sublink 1C
														</NavDropdown.Item>
													</Col>
													<Col>
														<NavDropdown.Item
															href=""
														>
															Sublink 2A
														</NavDropdown.Item>
														<NavDropdown.Item
															href=""
														>
															Sublink 2B
														</NavDropdown.Item>
														<NavDropdown.Item
															href=""
														>
															Sublink 2C
														</NavDropdown.Item>
													</Col>
													<Col>
														You can put short paragraph of information here to describe about this section.
													</Col>
												</Row>
											</Container>
										</NavDropdown>
										<NavDropdown
											title="Dropdown"
											href=""
											eventKey="2"
										>
											<NavDropdown.Item
												href=""
											>
												Sublink 3A
											</NavDropdown.Item>
											<NavDropdown.Item
												href=""
											>
												Sublink 3B
											</NavDropdown.Item>
											<NavDropdown.Item
												href=""
											>
												Sublink 3C
											</NavDropdown.Item>
										</NavDropdown>
										<Nav.Item>
											<Nav.Link
												href=""
												eventKey="3"
											>
												Link
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</div>
					</div>
					{/* Nav Bar */}

					<br /><hr /><br />

					{/* Typography */}
					<div>
						<h2 className="text-primary mb-4">Typography</h2>
						<div className="row">
							<div className="col">
								<p className="fw-bold">Header Text</p>
								<h1>Header 1</h1>
								<h2>Header 2</h2>
								<h3>Header 3</h3>
								<h4>Header 4</h4>
								<h5>Header 5</h5>
							</div>
							<div className="col">
								<p className="fw-bold">Example Body Text</p>
								<p>
									Nullam quis risus eget urna mollis ornare vel eu leo.{" "}
									<a href="" style={{ color: this.props.infoColor }}>Cum sociis natoque penatibus</a> et magnis dis
									parturient montes, nascetur ridiculus mus. Nullam id dolor id
									nibh ultricies vehicula.
								</p>

								<ul>
									<li>Lorem, ipsum dolor.</li>
									<li>Veritatis, tempora similique!</li>
									<li>Hic, itaque molestias.</li>
								</ul>
								
							</div>
							<div className="col">
								<p className="fw-bold">Default Text Color</p>
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
								<p className="fw-bold">This is a bold text</p>
								<small>
									This is a small/caption text
								</small>
							</div>
						</div>
					</div>
					{/* Typography */}

					<br /><hr /><br />

					{/* Tables */}
					<div>
						<h2 className="text-primary mb-4">Tables</h2>
						<table className="table bg-white">
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
								<tr
									style={{
										backgroundColor: this.props.themePrimaryColor
									}}
									className="text-white"
								>
									<td>Data 1A</td>
									<td>Data 1B</td>
								</tr>
								<tr
									style={{
										backgroundColor: this.props.themeSecondaryColor
									}}
									className="text-white"
								>
									<td>Data 2A</td>
									<td>Data 2B</td>
								</tr>
								<tr
									style={{
										backgroundColor: this.props.infoColor
									}}
									className="text-white"
								>
									<td>Data 2A</td>
									<td>Data 2B</td>
								</tr>
								<tr
									style={{
										backgroundColor: this.props.warningColor
									}}
									className="text-black"
								>
									<td>Data 3A</td>
									<td>Data 3B</td>
								</tr>
								<tr
									style={{
										backgroundColor: this.props.dangerColor
									}}
									className="text-white"
								>
									<td>Data 3A</td>
									<td>Data 3B</td>
								</tr>
								<tr
									style={{
										backgroundColor: this.props.successColor
									}}
									className="text-white"
								>
									<td>Data 3A</td>
									<td>Data 3B</td>
								</tr>
							</tbody>
						</table>
					</div>
					{/* Tables */}

					<br /><hr /><br />

					{/* Breadcrumb */}
					<div>	
						<h2 className="text-primary mb-4">Breadcrumb</h2>
						<Breadcrumb>
							<Breadcrumb.Item href="">
								Home
							</Breadcrumb.Item>
							<Breadcrumb.Item href="">
								Item 1
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								Item 2
							</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					{/* Breadcrumb */}

					<br /><hr /><br />

					{/* Accordion */}
					<div className="row">
						<h2 className="text-primary mb-4">Accordion</h2>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									Accordion Item #1
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									Accordion Item #2
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					{/* Accordion */}

					<br /><hr /><br />

					{/* Card */}
					<div>
						<h2 className="text-primary mb-4">Card</h2>
						<div className="row">
							<div className="col col-md-4">
								<Card>
									<Card.Body>
										<Card.Title>
											Card Title
										</Card.Title>
										<Card.Subtitle>
											Card Subtitle
										</Card.Subtitle>
									</Card.Body>
									<Card.Footer className="d-flex justify-content-center">
										<Button
											className="me-2"
											style={{ backgroundColor: this.props.themePrimaryColor, border: "1px solid" + this.props.themePrimaryColor }}
										>
											Button
										</Button>
										<Button
											style={{ backgroundColor: this.props.themePrimaryColor, border: "1px solid" + this.props.themePrimaryColor }}
										>
											Button
										</Button>
									</Card.Footer>
								</Card>
							</div>
							<div className="col col-md-4">
								<Card style={{ backgroundColor: this.props.themePrimaryColor, color: "white" }}>
									<Card.Header>
										Lorem Ipsum
									</Card.Header>
									<Card.Body>
										<Card.StretchedLink href=""></Card.StretchedLink>
										<Card.Title>
											Lorem ipsum dolor sit amet.
										</Card.Title>
										<Card.Text>
											<br /><br /><br /><br /><br />
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										07 July 2022
									</Card.Footer>
								</Card>
							</div>
						</div>
					</div>
					{/* Card */}

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
	};
};

const mapDispatchToProps = dispatch => {
	return {
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
