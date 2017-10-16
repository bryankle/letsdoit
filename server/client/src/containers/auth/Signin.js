import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  
  handleFormSubmit({ name, password }) {
    this.props.signinUser({name, password}, () => {
      this.props.history.push('/tasks')
    });
  }

  renderInput({ label, ...field }) {
    return (
       <Form.Input
                { ...field.input }
                fluid
                icon={ label === 'Username' ? 'user' : 'lock'}
                iconPosition='left'
                placeholder= { label }
              />
      )
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>{this.props.errorMessage}</strong>
        </div>
        )
    }
  }

  render() {
    console.log("SIGNIN")
    console.log(this.props);
 
    const { handleSubmit } = this.props;

    return (

    <div>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' />
            {' '}Log-in to your account
          </Header>
          <Form 
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            size='large'>
            <Segment stacked>
              <Field name="name" component={this.renderInput} label="Username" />
              <Field name="password" component={this.renderInput} label="Password" />
              
              {this.renderAlert()}

              <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>

    )
  }
}

function mapStateToProps(state) {
  return { 
      user: state.auth.user, 
      errorMessage: state.auth.error }
}

export default reduxForm({form: 'signin'})(connect(mapStateToProps, actions)(Signin))

// export default SigninForm;
