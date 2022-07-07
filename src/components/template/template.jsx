/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import Frame from "react-frame-component";

import { Row, Col, Card, Button } from "@govtechsg/sgds-react"

// Import Redux Store
import {
  updateTableHeadColor,
  updateTableHoverable,
  updateTableFullwidth,
  updateThemePrimaryColor
} from "../../store/actions/index";

class Template extends Component {
  render() {
    return (
      <Frame
        head={
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@govtechsg/sgds@2.0.0-alpha.3/sgds/sgds.css"
          />
        }
      >
        <div className="p-6 text-center text-white" style={{ backgroundColor: this.props.themePrimaryColor }}>
          <h1 className="mb-4">design system</h1>
          <p>Unites Singapore Government Digital Services around a common UI language and user experience</p>
        </div>
        <div  className="p-3 text-center text-white" style={{ backgroundColor: this.props.themeSecondaryColor }}>
          <Row>
            <Col>
              <b>Lorem, ipsum dolor.</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, accusamus!</p>
            </Col>
            <Col>
              <b>Lorem, ipsum dolor.</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, accusamus!</p>
            </Col>
            <Col>
              <b>Lorem, ipsum dolor.</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, accusamus!</p>
            </Col>
          </Row>
        </div>
        <div className="p-6 bg-light">
          <h2 className="mb-6 text-center" style={{ color: this.props.themeSecondaryColor }}>Lorem ipsum dolor sit amet.</h2>
          <Row className="mb-3">
            <Col md="4">
              <Card>
                <Card.Img
                  alt="img alternate text goes here"
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  variant="top"
                />
                <Card.Body>
                  <Card.StretchedLink href=""></Card.StretchedLink>
                  <Card.Title>
                    Lorem, ipsum.
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, facilis?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img
                  alt="img alternate text goes here"
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  variant="top"
                />
                <Card.Body>
                  <Card.StretchedLink href=""></Card.StretchedLink>
                  <Card.Title>
                    Lorem, ipsum.
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, facilis?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Img
                  alt="img alternate text goes here"
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  variant="top"
                />
                <Card.Body>
                  <Card.StretchedLink href=""></Card.StretchedLink>
                  <Card.Title>
                    Lorem, ipsum.
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, facilis?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-white">
            <Col md="4">
              <Card style={{ backgroundColor: this.props.successColor }}>
                <Card.Header>
                  test
                </Card.Header>
                <Card.Body>
                  <Card.StretchedLink href=""></Card.StretchedLink>
                  <Card.Title>
                    Title
                  </Card.Title>
                  <Card.Text>
                    <br /><br /><br /><br /><br />
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  07 July 2022
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ backgroundColor: this.props.warningColor }}>
                <Card.Header>
                  test
                </Card.Header>
                <Card.Body>
                  <Card.StretchedLink href=""></Card.StretchedLink>
                  <Card.Title>
                    Title
                  </Card.Title>
                  <Card.Text>
                    <br /><br /><br /><br /><br />
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  07 July 2022
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4">
              <Card style={{ backgroundColor: this.props.dangerColor }}>
                <Card.Header>
                  test
                </Card.Header>
                <Card.Body>
                  <Card.StretchedLink href=""></Card.StretchedLink>
                  <Card.Title>
                    Title
                  </Card.Title>
                  <Card.Text>
                    <br /><br /><br /><br /><br />
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  07 July 2022
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="bg-white text-center p-6">
          <h2 className="mb-6" style={{ color: this.props.themeSecondaryColor }}>Lorem ipsum dolor sit.</h2>
          <Row className="mb-6">
            <Col>
              <b>Lorem,ipsum.</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quod.</p>
              <Button style={{ backgroundColor: this.props.themePrimaryColor, border: "1px solid" + this.props.themePrimaryColor }}
              >
                button
              </Button>
            </Col>
            <Col>
              <b>Lorem,ipsum.</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quod.</p>
              <Button style={{ backgroundColor: this.props.themeSecondaryColor, border: "1px solid" + this.props.themeSecondaryColor }}
              >
                button
              </Button>
            </Col>
            <Col>
              <b>Lorem,ipsum.</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quod.</p>
              <Button style={{ backgroundColor: this.props.dangerColor, border: "1px solid" + this.props.dangerColor }}
              >
                button
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Lorem,ipsum.</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quod.</p>
              <Button style={{ backgroundColor: this.props.successColor, border: "1px solid" + this.props.successColor }}
              >
                button
              </Button>
            </Col>
            <Col>
              <b>Lorem,ipsum.</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quod.</p>
              <Button style={{ backgroundColor: this.props.infoColor, border: "1px solid" + this.props.infoColor }}
              >
                button
              </Button>
            </Col>
            <Col>
              <b>Lorem,ipsum.</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quod.</p>
              <Button style={{ backgroundColor: this.props.warningColor, border: "1px solid" + this.props.warningColor }}
              >
                button
              </Button>
            </Col>
          </Row>
        </div>
        <div className="bg-light p-6">
          <Row className="mb-4">
            <Col md="6">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at.</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quo quis provident nesciunt ut maiores minima,
              <a href="" className="text-decoration-none" style={{ color: this.props.infoColor }}>
                ipsa explicabo doloremque quae
              </a>?
            </Col>
            <Col md="6">
            </Col>
          </Row>
          <Row>
            <Col md="6">
            </Col>
            <Col md="6">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at.</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quo quis provident nesciunt ut maiores minima,
              <a href="" className="text-decoration-none" style={{ color: this.props.infoColor }}>
                ipsa explicabo doloremque quae
              </a>?
            </Col>
          </Row>
        </div>
        <div className="bg-white text-center p-6">
          <h2 className="mb-6">Lorem ipsum dolor sit.</h2>
          <table className="table">
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
        <div className="p-6 text-center text-white" style={{ backgroundColor: this.props.themeSecondaryColor }}>
          <h2 className="mb-4">Lorem ipsum dolor sit amet.</h2>
          <p>SGDS is <a href="https://github.com/GovTechSG/sgds" className="text-white" target="_blank">open source</a>.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur harum modi ullam dignissimos delectus quae officiis eveniet dicta sequi.</p>
          <Button variant="outline-light" href="https://form.gov.sg/#!/5bc440ac507956000fdbae91" target="_blank">Let's Connect</Button>
        </div>
      </Frame>
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
    updateTableHeadColor: color => dispatch(updateTableHeadColor(color)),
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
)(Template);
