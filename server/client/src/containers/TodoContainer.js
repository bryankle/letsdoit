import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react';
import ProgressBar from '../components/ProgressBar';
import Tabs from '../components/Tabs';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <Grid centered columns={2}>
                <Grid.Column>
                <Input action='' placeholder="Let's do something" />
                <ProgressBar />
                <Tabs />
                </Grid.Column>
            </Grid>
        )
    }
}

export default Todo;