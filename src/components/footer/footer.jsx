/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import { Footer } from "@govtechsg/sgds-react"

class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <Footer.Top>
          <Footer.Top.Header headerTitle="SGDS Theme Customiser">
            A theme customiser for SGDS.
          </Footer.Top.Header>
          <Footer.Top.ContactLinks>
            <a
              href="https://github.com/govtechsg/sgds-theme-customiser"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Footer.Top.ContactLinks>
        </Footer.Top>
        <Footer.Bottom>
          <Footer.Bottom.Links>
            <a
              href="https://www.tech.gov.sg/report_vulnerability"
              target="_blank"
              rel="noreferrer"
            >
              Report Vulnerability
            </a>
          </Footer.Bottom.Links>
          <Footer.Bottom.Copyrights>
            © 2022 Government of Singapore. Last Updated 07 July 2022
          </Footer.Bottom.Copyrights>
        </Footer.Bottom>
      </Footer>
    );
  }
}

export default FooterComponent;
