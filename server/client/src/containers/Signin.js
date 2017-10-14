import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SigninForm extends Component {
  constructor() {
    super()
  }
  
  handleFormSubmit({ name, password }) {
    console.log('Handle form submit');

    console.log('Name', name);
    console.log('Password', password);
    console.log(this.props);
    this.props.signinUser({name, password}, () => {
      this.props.history.push('/')
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

  render() {
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

export default reduxForm({form: 'signin'})(connect(null, actions)(SigninForm))

// export default SigninForm;
