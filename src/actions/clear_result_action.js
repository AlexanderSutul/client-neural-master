export const clearResult = (object) => {
    console.log("clearReasult object is ", object);
    return {
        type: 'CLEAR_RESULT',
        payload: object
    }
};