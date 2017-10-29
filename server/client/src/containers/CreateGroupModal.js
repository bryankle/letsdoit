import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';

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

  render() {
    // const { header, Form, type } = this.props; 

    return(
      <Modal 
        trigger={<Icon style={{float: 'right', paddingTop: '0.4em', paddingRight: '1em'}} size='big' name='add square'/>}
        closeIcon
        >
      <Modal.Header>Header</Modal.Header>
      <Modal.Content image>
        Hello
      </Modal.Content>
    </Modal>
    )
  }
}

export default ModalForm;
