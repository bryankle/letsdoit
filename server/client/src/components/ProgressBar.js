import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';


const ProgressBar = (props) => (
        <div>
	        <Progress percent={props.percent} indicating />
	    </div>
	)
    

export default ProgressBar;