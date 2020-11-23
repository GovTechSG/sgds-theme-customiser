/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Footer extends Component {
  state = {};

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
                  A theme customiser for
                  <a
                    href="https://github.com/govtechsg/sgds"
                    style={{ textDecoration: "underline" }}
                  >
                    SGDS
                  </a>.
                </p>
                <p>Issues and pull requests requests welcome!</p>
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
                  © 2019 Government of Singapore. Last Updated 16 Sep 2019
                </p>
                <p className="is-hidden-desktop">
                  © 2019 Government of Singapore
                </p>
                <p className="is-hidden-desktop last-updated">
                  Last Updated 16 Sep 2019
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
