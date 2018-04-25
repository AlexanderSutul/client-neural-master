import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import Button from 'react-bootstrap/lib/Button';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeModal} from "./actions/close_modal";

class ModalComponent extends Component {
    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Modal
                    show={this.props.sendData.show}
                    onHide={() => this.props.closeModal(this.props.sendData)}
                    aria-labelledby="contained-modal-title"
                >
                    <ModalHeader closeButton>
                        <ModalTitle id="contained-modal-title">
                            Отчет о состоянии пациента
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        {
                            this.props.sendData.show === false ? 'false' : 'true'
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => this.props.closeModal(this.props.sendData)}>Закрыть</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sendData: state.sendData
    }
}



function matchDispatchToProps(dispatch) {
    return bindActionCreators({closeModal}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ModalComponent);