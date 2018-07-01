const defaultStates = {
    patientsList: [],
    deletedPatient: null,
    patient: {
        sex: '',
        age: '',
        height: '',
        bodyMass: '',
        chest: '',
        bodyMassIndex: '',
        shoulder: '',
        forearm: '',
        shin: '',
        lean: '',
        mep: '',
        mip: '',
        snip: ''
    },
    isErrors: true
};

const GET_PATIENTS = 'GET_PATIENTS';
const ADD_PATIENT = 'ADD_PATIENT';
const DELETE_PATIENT = 'DELETE_PATIENT';
const CHECK_PATIENT = 'CHECK_PATIENT'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PATIENTS:
            return {
                ...action.payload
            };
        case ADD_PATIENT:
            return {
                ...action.payload,
                patient: state.patient
            };
        case DELETE_PATIENT:
            return {
                ...action.payload,
                deletedPatient: null
        };
        case CHECK_PATIENT:
            let isError = false;
            for (let key in action.payload.patient) {
                let value = action.payload.patient[key];
                if (value === '') {
                    isError = true;
                }
            }
            return {
                ...action.payload,
                isErrors: isError
            };
        default:
            return state;
    }
}
