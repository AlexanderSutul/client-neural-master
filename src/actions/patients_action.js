import axios from 'axios';

export const getPatientsRequest = object => {
    console.log("getPatientsRequest object is ", object);
    return (dispatch) => {
        const url = 'http://127.0.0.1:5000/getPatients';
        axios.get(url)
            .then(response => {
                object.patientsList = response.data;
                dispatch({
                    type: 'GET_PATIENTS',
                    payload: object
                });
            })
            .catch(error => console.log("error is ", error))
    }
}

export const deletePatientRequest = object => {
    console.log("deletePatientRequest object is ", object);
    return (dispatch) => {
        const url = 'http://127.0.0.1:5000/deletePatient';
        axios.post(url, object)
            .then(response => {
                object.patientsList = response.data;
                dispatch({
                    type: 'DELETE_PATIENT',
                    payload: object
                });
            })
            .catch(error => console.log("error is ", error))
    }
}

export const addPatientRequest = object => {
    console.log("addPatientRequest object is ", object);
    return (dispatch) => {
        const url = 'http://127.0.0.1:5000/addPatient';
        axios.post(url, object)
            .then(response => {
                console.log('ADD_PATIENT response', response)
                object.patientsList = response.data;
                dispatch({
                    type: 'ADD_PATIENT',
                    payload: object
                });
            })
            .catch(error => console.log("error is ", error))
    }
}
