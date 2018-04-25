export const closeModal = (object) => {
    console.log("closeModal object is ", object);
    return {
        type: 'CLOSE_MODAL',
        payload: object
    }
};