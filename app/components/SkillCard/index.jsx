import React from "react";

import "./styles";

export default class SkillCard extends React.Component {

  render() {

    var icon = this.props.icon;
    if(icon.indexOf("devicon") == -1) {
      // not a full icon name, patch it up
      icon = "devicon-" + this.props.icon + "-plain ";
    }

    return (
      <span className="card skillCard">
        <div className="image">
          <i className={icon + " colored"}></i>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </span>
    )
  }

}
