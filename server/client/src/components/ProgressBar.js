import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <Progress percent={50} indicating />
            </div>
        )
    }
}

export default ProgressBar;