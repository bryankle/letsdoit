import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps, () => {
      this.props.history.push('/tasks')
    });
  }

  renderInput({ label, input, meta: { touched, error } }) {
    return (
      <span>
         <Form.Input
                fluid
                icon={ label === 'Username' ? 'user' : 'lock'}
                iconPosition='left'
                placeholder= { label }
                {...input}
              />
              { touched && error && <span>{error}</span> }
      </span>
      )
  }

  // Error handling message render
  // Handled by PostgreSQL unique
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>Oops, {this.props.errorMessage}</strong>
        </div>
        )
    }
  }


  render() {

    const { handleSubmit } = this.props;

    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' />
              {' '}Register an account
            </Header>
            <Form 
              onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
              size='large'>
              <Segment stacked>
                <Field name="name" component={this.renderInput} label="Username" />
                <Field name="password" component={this.renderInput} label="Password" />
                <Field name="passwordConfirm" component={this.renderInput} label="Confirm Password" />
                {this.renderAlert()}
                <Button color='teal' fluid size='large'>Register</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
      )
  }
}


function validate(formProps) {
  const errors = {};

  if (!formProps.name) {
    errors.name = 'Please enter a username';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Password must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({form: 'signup', validate})(connect(mapStateToProps, actions)(Signup))
