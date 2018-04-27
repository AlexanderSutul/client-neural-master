import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import Button from 'react-bootstrap/lib/Button';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeModal} from "./actions/hide_modal_action";
import {clearResult} from "./actions/clear_result_action";

const ModalComponent = (props) => {
    return (
        <div className="modal-container" style={{height: 350}}>
            <Modal
                show={props.settings.modal}
                onHide={() => {
                    props.closeModal(props.settings);
                    props.clearResult(props.data);
                }}
                aria-labelledby="contained-modal-title"
            >
                <ModalHeader closeButton>
                    <ModalTitle id="contained-modal-title">
                        Отчет о состоянии пациента
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    {props.data.result === ''
                        ? <div>Идет обработка данных....</div>
                        : JSON.stringify(props.data.result.data)}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => {
                        props.closeModal(props.settings);
                        props.clearResult(props.data);
                    }}>Закрыть</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        data: state.data,
        settings: state.settings
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({closeModal, clearResult}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ModalComponent);