import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import Button from 'react-bootstrap/lib/Button';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeModal} from "./actions/hide_modal_action";

class ModalComponent extends Component {
    render() {
        // let result = this.props.data.result;
        let result = this.props.data;
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Modal
                    show={this.props.settings.modal}
                    onHide={() => this.props.closeModal(this.props.settings)}
                    aria-labelledby="contained-modal-title"
                >
                    <ModalHeader closeButton>
                        <ModalTitle id="contained-modal-title">
                            Отчет о состоянии пациента
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        {JSON.stringify(result)}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => this.props.closeModal(this.props.settings)}>Закрыть</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        settings: state.settings
    }
}



function matchDispatchToProps(dispatch) {
    return bindActionCreators({closeModal}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ModalComponent);