import React from "react";

import "./styles";

export default class Hero extends React.Component {

  render() {
    return(
      <div className="ui inverted vertical masthead center aligned segment hero">
        <div className="ui text container">
          <h1 classname="ui inverted header">
            Joshua McDonald
          </h1>
          <h2>Full-Stack Developer
            <div className="sub header location">Austin, TX</div>
          </h2>
        </div>
      </div>
    )
  }

}
