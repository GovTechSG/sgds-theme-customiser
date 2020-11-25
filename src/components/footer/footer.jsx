/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

function FooterLink(props) {
  return (
    <a {...props} style={{ textDecoration: "underline" }}>
      {props.children}
    </a>
  );
}

class Footer extends Component {
  render() {
    return (
      <footer className="sgds-footer">
        <div className="top-section">
          <div className="sgds-container is-fluid">
            <div className="row">
              <div className="col">
                <h5 className="has-text-white">
                  <b>SGDS Theme Customiser</b>
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col is-4">
                <p>
                  A theme customiser for{" "}
                  <FooterLink href="https://github.com/govtechsg/sgds">
                    SGDS
                  </FooterLink>
                  .
                </p>
                <p>
                  <FooterLink href="https://github.com/govtechsg/sgds">
                    Issues and pull requests requests welcome!
                  </FooterLink>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col is-right-desktop-only">
                <ul>
                  <li className="is-inline-block-desktop-only">
                    <p>
                      <a
                        href="https://github.com/govtechsg/sgds-theme-customiser"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="sgds-container is-fluid">
            <div className="row is-multiline">
              <div className="col is-12">
                <ul>
                  <li>
                    <a
                      href="https://tech.gov.sg/report_vulnerability"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Report Vulnerability
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col is-12 has-text-right-desktop has-text-right-tablet has-text-left-mobile">
                <p className="is-hidden-touch">
                  © 2020 Government of Singapore. Last Updated 23 Nov 2020
                </p>
                <p className="is-hidden-desktop">
                  © 2020 Government of Singapore
                </p>
                <p className="is-hidden-desktop last-updated">
                  Last Updated 23 Nov 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
