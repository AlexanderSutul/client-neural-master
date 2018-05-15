export const showForm = object => {
    console.log("showForm object is ", object);
    return {
        type: 'OPEN_FORM',
        payload: object
    }
};

export const showAdmin = object => {
    console.log("showAdmin object is ", object);
    return {
        type: 'OPEN_ADMIN',
        payload: object
    }
};
