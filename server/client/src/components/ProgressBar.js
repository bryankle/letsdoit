import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

const ProgressBar = ({ percent }) => (
  <div>
    <Progress percent={percent} indicating />
  </div>
);

export default ProgressBar;
