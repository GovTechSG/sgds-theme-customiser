import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Button, Modal } from "@govtechsg/sgds-react"

export function HelpModalToggle(props) {
  return (
    <Button size="sm" variant="light" onClick={props.onToggle}>
      <u>Help</u>
    </Button>
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
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>SGDS Theme Customiser</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Use the sidebar to adjust theme colours for the SGDS library. Each colour corresponds to a specific class.
        </p>
        <p>
          Use the "Export as Sass Variables" button to generate a Sass file containing variable overrides you can use to customise your SGDS build.
        </p>
      </Modal.Body>
    </Modal>
  );
}
HelpModal.propTypes = {
  onHide: PropTypes.func,
};
