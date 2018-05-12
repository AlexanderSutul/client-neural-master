export const closeModal = (object) => {
    console.log("closeModal object is ", object);
    return {
        type: 'HIDE_MODAL',
        payload: object
    }
};
