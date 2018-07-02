const settings = {
    modal: false,
    modalPatient: false,
    form: true,
    admin: false
};

const OPEN_MODAL = 'OPEN_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const OPEN_MODAL_PATIENT = 'OPEN_MODAL_PATIENT';
const HIDE_MODAL_PATIENT = 'HIDE_MODAL_PATIENT';
const OPEN_FORM = 'OPEN_FORM'
const OPEN_ADMIN = 'OPEN_ADMIN'

export default (state = settings, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...action.payload,
                modal: true
            };
        case HIDE_MODAL:
            return {
                ...action.payload,
                modal: false
            };
        case OPEN_MODAL_PATIENT:
            return {
                ...action.payload,
                modalPatient: true
            };
        case HIDE_MODAL_PATIENT:
            return {
                ...action.payload,
                modalPatient: false
            };
        case OPEN_FORM:
            return {
                ...action.payload,
                form: true,
                admin: false
            };
        case OPEN_ADMIN:
            return {
                ...action.payload,
                admin: true,
                form: false
            };
        default:
            return state;
    }
}