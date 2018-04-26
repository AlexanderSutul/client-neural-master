export const openModal = (object) => {
    console.log("openModal object is ", object);
    return {
        type: 'OPEN_MODAL',
        payload: object
    }
};