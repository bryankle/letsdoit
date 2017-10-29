import React, { Component } from 'react';
import { Modal, Icon, Form, Segment, Button } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';



class ModalForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  handleFormSubmit({ groupName }) {
    // Action creator
    console.log('handleSubmit');
    console.log('groupName:', groupName);
  }

  renderInput({ label, ...field }) {
    return (
       <Form.Input
                { ...field.input }
                fluid
                iconPosition='left'
                placeholder= { label }
              />
      )
  }

  render() {
    // const { header, Form, type } = this.props; 
    const { handleSubmit } = this.props;

    return(
      <Modal 
        size='tiny'
        trigger={<Icon style={{float: 'right', paddingTop: '0.4em', paddingRight: '1em'}} size='big' name='add square'/>}
        closeIcon
      >
      <Modal.Header>Create Group</Modal.Header>
      <Modal.Content>
         <Form 
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            size='big'>

              <Field name="group" component={this.renderInput} label="Group Name" />

              <Button color='teal' fluid size='large'>Confirm</Button>

          </Form>

      </Modal.Content>
    </Modal>
    )
  }
}

export default reduxForm({form: 'creategroup'})(connect(null, null)(ModalForm))
