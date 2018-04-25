export const sendData = (object) => {
    console.log("object is ", object);
    return {
        type: 'SEND_DATA',
        payload: object
    }
};