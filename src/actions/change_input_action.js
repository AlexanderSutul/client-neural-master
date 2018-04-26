export const changeData = (object) => {
    console.log("changeData object is ", object);
    return {
        type: 'CHANGED_DATA',
        payload: object
    }
};