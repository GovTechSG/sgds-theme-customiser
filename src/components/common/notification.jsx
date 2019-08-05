import React, { Component } from "react";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  getClassNameForBase() {
    let className = "sgds-notification";
    if (this.props.isToast) {
      className = className.concat(" is-toast");
    }
    if (this.props.isDanger) {
      className = className.concat(" is-danger");
    }
    return className;
  }

  getClassNameForIcon() {
    let className = "sgds-icon is-size-4";
    if (this.props.isToast) {
      className = className.concat(" sgds-icon-circle-info");
    }
    else {
      className = className.concat(" sgds-icon-callout")
    }
    return className;
  }

  getDetailClassName() {
    let className = "sgds-notification-detail";
    return className;
  }

  getContentClassName() {
    let className = "sgds-notification-content";
    return className;
  }

  getPClassName() {
    let className = "has-text-weight-bold";
    return className;
  }

  getSpanClassName() {
    let className = "delete";
    return className;
  }


  render() {
    return (
      <div className={this.getClassNameForBase()}>
        <div className={this.getDetailClassName()}>
          <div className={this.getContentClassName()}>
            <p className={this.getPClassName()}>Updates</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut dicta, ea facere fugit incidunt laborum officia quod unde.</p>
          </div>
          <span className={this.getSpanClassName()} id="cancel-notification"></span>
        </div>
      </div>
    );
  }
}

export default Notification;