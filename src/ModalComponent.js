import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import Button from 'react-bootstrap/lib/Button';

class ModalComponent extends Component {
    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Modal
                    show={this.props.show}
                    onHide={() => this.props.hideModal()}
                    aria-labelledby="contained-modal-title"
                >
                    <ModalHeader closeButton>
                        <ModalTitle id="contained-modal-title">
                            Отчет о состоянии пациента
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        Сила дыхательных мышц по MEP = {this.props.data.age}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => this.props.hideModal()}>Закрыть</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalComponent;