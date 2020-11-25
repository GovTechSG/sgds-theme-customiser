import React from "react";
import { Portal } from "react-portal";
import PropTypes from "prop-types";

export function Modal({ children, isActive, ...props }) {
  return (
    <Portal>
      <div
        className={`sgds-modal ${isActive ? "is-active" : ""}`}
        role="dialog"
        {...props}
      >
        <div className="sgds-modal-background"></div>

        <div className="sgds-modal-card">{children}</div>
      </div>
    </Portal>
  );
}
Modal.propTypes = {
  isActive: PropTypes.bool,
};

export function ModalHead({ children, ...props }) {
  return (
    <header
      className={`sgds-modal-card-head ${props.className || ""}`}
      {...props}
    >
      {children}
    </header>
  );
}

export function ModalBody({ children, ...props }) {
  return (
    <section
      className={`sgds-modal-card-body ${props.className || ""}`}
      {...props}
    >
      {children}
    </section>
  );
}

export function ModalFoot({ children, ...props }) {
  return (
    <footer
      className={`sgds-modal-card-foot ${props.className || ""}`}
      {...props}
    >
      {children}
    </footer>
  );
}
