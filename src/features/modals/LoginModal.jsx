import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import LoginForm from '../auth/Login/LoginForm';
import {closeModal} from "./modalActions";

const actions = {closeModal};

class LoginModal extends Component {
    render() {
        
        return (
            <Modal 
                style={{textAlign: "center", maxWidth: "350px", width: "95%", margin: "0em 0em 0em -15%"}}
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Login to B-Quest
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <LoginForm/>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(LoginModal);