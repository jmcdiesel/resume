import React from "react";

import "./styles";

import SkillCard from "components/SkillCard";

export default class ExperienceItem extends React.Component {

  render() {
    return (
      <div className="item">
        <div className="ui small image experienceImage">
          <img src={"/static/"+this.props.data.image} />
        </div>
        <div className="content">
          <h1 className="header">{this.props.data.title}</h1>
          <div className="meta">
            {this.props.data.dates}
          </div>
          <div classname="description">
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </div>
    )
  }

}
