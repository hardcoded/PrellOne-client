
import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Label from './Label'
import PropTypes from  'prop-types'


const ModalCard=(title, desc, memberIds, labelIds, modal, toggleModal)=>{
    return(
        <Modal isOpen={modal} toggleModal={toggleModal}>
        <ModalHeader toggleModal={toggleModal}>{title}</ModalHeader>
        <ModalBody>
          <h5> Description </h5>
          <p>{ desc }</p>
          <h5> Members </h5>
          <p>{ memberIds }</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal} >Cancel</Button>
        </ModalFooter>
      </Modal>
      )
}

ModalCard.PropTypes={
    id:  PropTypes.number,
    title:PropTypes.string.isRequired,
    desc:PropTypes.string,
    members:PropTypes.arrayOf(PropTypes.string),
    labels:PropTypes.arrayOf(Label),
    modal:PropTypes.boolean,
    toggleModal:PropTypes.func.isRequired,
  }
  export default ModalCard