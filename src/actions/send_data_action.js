export const sendData = (object) => {
    console.log("sendData object is ", object);
    return {
        type: 'SEND_DATA',
        payload: object
    }
};