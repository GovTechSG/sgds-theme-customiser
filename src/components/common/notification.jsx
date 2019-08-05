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


  render() {
    return (
      <div className = {this.getClassNameForBase()}>
        <div class="sgds-notification-detail">
          <div class="sgds-notification-content">
            <p class="has-text-weight-bold">Updates</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut dicta, ea facere fugit incidunt laborum officia quod unde.</p>
          </div>
          <span class="delete" id="cancel-notification"></span>
        </div>
      </div>
    );
  }
}

export default Notification;