import React from 'react';
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import { closeModal } from './modalActions'

const actions = {
    closeModal
}

const TestModal = ({closeModal}) => {
    return(
            <Modal closeIcon="close" open={true} onClose={closeModal}>
              <Modal.Header>Test Modal</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>Test Modal... nothing to see here</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
    )
}


/*The first parameter always has to be mapState but
we dont have mapState for this parameter so we set this to null */
export default connect(null, actions)(TestModal);