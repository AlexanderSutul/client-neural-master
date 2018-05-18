export const openModal = (object) => {
    console.log("openModal object is ", object);
    return {
        type: 'OPEN_MODAL',
        payload: object
    }
};

export const closeModal = (object) => {
    console.log("closeModal object is ", object);
    return {
        type: 'HIDE_MODAL',
        payload: object
    }
};

export const openModalPatient = (object) => {
    console.log("openModalPatient object is ", object);
    return {
        type: 'OPEN_MODAL_PATIENT',
        payload: object
    }
};

export const closeModalPatient = (object) => {
    console.log("closeModal object is ", object);
    return {
        type: 'HIDE_MODAL_PATIENT',
        payload: object
    }
};
