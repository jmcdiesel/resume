import React from "react";
import ReactDom from "react-dom";

import Resume from "components/Resume";

import data from "data.json";

ReactDom.render(<Resume data={data} />, document.getElementById("app"));
