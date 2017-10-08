import React, { Component } from 'react';
import { Grid, Input } from 'semantic-ui-react';
import ProgressBar from '../components/ProgressBar';
import Tabs from '../components/Tabs';
import Loading from '../components/Loading';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            loading: true
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = function(e) {
        this.setState({ input: e.target.value })
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: !this.state.loading })
        }, 1000)
    }

    render() {
        console.log(this.props)
        if (!this.state.loading) {
            return(
                <Grid centered columns={2}>
                    <Grid.Column>
    
                    <Input 
                        value={this.state.input}
                        onChange={this.handleInput} 
                        placeholder="Let's do something" />
                    <h1>{this.state.input}</h1>
                    
                    <ProgressBar />
                    <Tabs allTasks={this.props.allTasks[0].tasks}/>
                    </Grid.Column>
                </Grid>
            )
        }
        else {
            return (
                <Loading />
            ) 
        }
    }
}

export default Todo;