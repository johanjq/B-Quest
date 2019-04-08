import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {closeModal} from "./modalActions";
import RegisterForm from '../auth/Register/RegisterForm';

const actions = {closeModal};

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                style={{textAlign: "center", maxWidth: "350px", width: "95%", margin: "0em 0em 0em -15%"}}
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Sign Up to B-Quest
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm/>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(RegisterModal);