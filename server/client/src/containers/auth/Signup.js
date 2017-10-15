import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit() {

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
            <Form size='large'>
              <Segment stacked>
                <Field name="name" component={this.renderInput} label="Username" />
                <Field name="password" component={this.renderInput} label="Password" />
                <Field name="passwordConfirm" component={this.renderInput} label="Confirm Password" />
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

  console.log(formProps);

  return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({form: 'signup', validate})(connect(mapStateToProps, actions)(Signup))
