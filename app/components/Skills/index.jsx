import React from "react";

import "./styles"

import SkillCard from "components/SkillCard";

export default class Skills extends React.Component {

  render() {

    var cards = [];
    var skills = this.props.data;

    for (var key in skills) {
      var icon = key;
      if(!skills.hasOwnProperty(key)) continue;
      if(skills[key][1]) {
        icon = skills[key][1];
      }
      cards.push(<SkillCard icon={icon} key={"skills-"+key}>{skills[key][0]}</SkillCard>);
    }

    return (
      <div className="ui cards center aligned basic segment container skillContainer">
        {cards}
      </div>
    )
  }

}
