
import React from "react";

import Divider from "components/Divider";

export default class Bio extends React.Component {

  render() {
    return(
      <div className="ui items container">
        <div className="item">

          <div className="image">
            <img src="static/me.jpg" />
          </div>

          <div className="content">
            <div className="description">
              <p>
                I'm a <strong>full-stack</strong> web developer with over a decade of experience modern (and lets be fair, lots of not-so-modern along the way)
                development environments.  I cut my teeth in PHP back before any form of modern DevOps existed and before "asset pipeline" was
                a phrase most people knew.  As the maturity of the web developer ecosystem grew, I grew with it.  I've worked on bare-metal servers
                as well as all the new fancy CI and container systems. I've worked in scrum environments, waterfall, and workflows that have
                no place existing let alone having a name for.   I strive to constantly keep myself current and try to bring that drive to
                whatever environment I'm working in.
              </p>
              <p>
                When I'm not working, I'm a father of 2 boys, a husband to a fitness-obsessed wife (who is bringing me along on her journey), and a
                gamer who's found a new love for creating youtube gaming content.
              </p>
              <div className="extra">
                <div className="ui list relaxed horizontal">
                  <div className="item">
                    <i className="phone square icon"></i>
                    <div className="content">
                      <a href="tel:+15127650257">512.765.0257</a>
                    </div>
                  </div>
                  <div className="item">
                    <i className="mail square icon"></i>
                    <div className="content">
                      <a href="mailto:jmcdiesel@icloud.com">Email Me</a>
                    </div>
                  </div>
                  <div className="item">
                    <i className="facebook square icon"></i>
                    <div className="content">
                      <a href="https://www.facebook.com/roosterjm2k2">Facebook</a>
                    </div>
                  </div>
                  <div className="item">
                    <i className="youtube square icon"></i>
                    <div className="content">
                      <a href="https://www.youtube.com/channel/UC4roh2fJaPuHFdTN7VQliPQ">Youtube</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
