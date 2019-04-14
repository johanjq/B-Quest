import React from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";
import { closeModal } from "./modalActions";
import ShareForm from '../share/ShareForm'

const actions = { closeModal };

const ShareModal = ({ closeModal }) => {
    return (
      <Modal style={{textAlign: "center", maxWidth: "500px", width: "95%", margin: "0em 0em 0em -20%"}} closeIcon="close" open={true} onClose={closeModal}>
        <Modal.Header>Share Treasure Hunt</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ShareForm/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
}

export default connect(null, actions)(ShareModal);
