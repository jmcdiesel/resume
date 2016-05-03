import React from "react";

export default class Divider extends React.Component {

  render() {
    return(
      <h4 className="ui horizontal divider header">
        <i className={this.props.icon + " icon"}></i>
        {this.props.children}
      </h4>
    )
  }

}
