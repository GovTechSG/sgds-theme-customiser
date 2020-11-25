import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Modal, ModalHead, ModalBody } from "../modal";

const StyledModalCloseContainer = styled.div`
  position: relative;
  .esc-hint {
    position: absolute;
    top: 20px;
    left: 2px;
    font-size: 9px;
    font-weight: bold;
  }
`;

export function HelpModalToggle(props) {
  return (
    <button className="sgds-button is-text is-small" onClick={props.onToggle}>
      Help
    </button>
  );
}
HelpModalToggle.propTypes = {
  onToggle: PropTypes.func,
};

export function HelpModal(props) {
  const { onHide } = props;
  useEffect(() => {
    function closeModalOnEsc(event) {
      if (event.key === "Escape") {
        onHide();
      }
    }
    document.addEventListener("keydown", closeModalOnEsc);
    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [onHide]);
  return (
    <Modal isActive>
      <ModalHead style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <strong>SGDS Theme Customiser</strong>
        </p>
        <StyledModalCloseContainer>
          <button className="delete" onClick={onHide} type="button"></button>
          <span className="esc-hint">Esc</span>
        </StyledModalCloseContainer>
      </ModalHead>
      <ModalBody>
        <p>
          Use the sidebar to adjust theme colours for the{" "}
          <a href="https://www.designsystem.gov.sg">SGDS library</a>. Each
          colour corresponds to a specific class as described in{" "}
          <a href="https://www.designsystem.tech.gov.sg/docs/colours/">
            SGDS colours
          </a>
          .
        </p>
        <p>
          Use the "Export as Sass variables" button to generate a Sass file
          containing variable overrides you can use to customise your SGDS
          build.{" "}
          <a href="https://www.designsystem.gov.sg/docs/customise-sgds/">
            Find out about SGDS customisation here.
          </a>
        </p>
      </ModalBody>
    </Modal>
  );
}
HelpModal.propTypes = {
  onHide: PropTypes.func,
};
