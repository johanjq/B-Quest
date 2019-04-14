import React from 'react';
import { connect } from 'react-redux'
import TestModal from './TestModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import ShareModal from './ShareModal'

//Only contains one modal
const modalLookup = {
    TestModal,
    LoginModal,
    RegisterModal,
    ShareModal
}

const mapState = (state) => ({
    currentModal: state.modals
})
//Modal manager which is connected to our store is mapping
//the states
const ModalManager = ({currentModal}) => {
    let renderedModal;

//And if there's a current model then we call this function
    if(currentModal) {
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];

        renderedModal = <ModalComponent {...modalProps}/>
    }
    return <span>{renderedModal}</span>
}
//So we have access to our current model inside our component
export default connect(mapState)(ModalManager);