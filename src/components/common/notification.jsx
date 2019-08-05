import React, { Component } from "react";

class Notification extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hovered: false
      };
    }


    getClassName() {
      let className = "sgds-notification";
      if (this.props.isPrimary) {
        className = className.concat(" is-primary");
      }
      if (this.props.isOutlined) {
        className = className.concat(" is-outlined");
      }
      if (this.props.isRounded) {
        className = className.concat(" is-rounded");
      }
      if (this.props.buttonSize === "small") {
        className = className.concat(" is-small");
      } else if (this.props.buttonSize === "medium") {
        className = className.concat(" is-medium");
      } else if (this.props.buttonSize === "large") {
        className = className.concat(" is-large");
      }
      return className;
    }

  
    render() {
      return (
        <div class="sgds-notification">
            <div class="sgds-notification-detail">
                    <div class="sgds-notification-content">
                        <p class="has-text-weight-bold">Updates</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut dicta,
                            ea facere fugit incidunt laborum officia quod unde.</p>
                    </div>
                <span class="delete" id="cancel-notification"></span>
            </div>
        </div>
      );
    }
  }
  
  export default Notification;