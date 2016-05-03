import React from "react";

import ExperienceItem from "components/ExperienceItem";

export default class Experience extends React.Component {

  render() {

    var experience = [];

    this.props.data.forEach(function(data) {
      experience.push(
        <ExperienceItem data={data} />
      )
    });

    return (
      <div className="ui divided items container experienceContainer">
        {experience}
      </div>
    )
  }

}
