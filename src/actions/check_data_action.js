export const checkData = (object) => {
    console.log("checkData object is ", object);
    return {
        type: 'CHECK_DATA',
        payload: object
    }
};