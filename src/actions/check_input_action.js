export const checkData = (object) => {
    console.log("checkData object is ", object);
    return {
        type: 'CHECK_DATA',
        payload: object
    }
};

export const checkPatient = (object) => {
    console.log("checkPatient object is ", object);
    return {
        type: 'CHECK_PATIENT',
        payload: object
    }
};
