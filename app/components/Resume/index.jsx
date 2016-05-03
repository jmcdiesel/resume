import React from "react";

import Hero from "components/Hero";
import Divider from "components/Divider";
import Skills from "components/Skills";
import Experience from "components/Experience";
import Bio from "components/Bio";

export default class Resume extends React.Component {

  render() {
    return(
      <div className="pusher">
        <Hero />
        <Divider icon="user">Who I Am</Divider>
        <Bio />
        <Divider icon="space shuttle">What I Do</Divider>
        <Skills data={this.props.data.skills}/>
        <Divider icon="building">Where I've Done It</Divider>
        <Experience data={this.props.data.experience}/>
      </div>
    )
  }

}
