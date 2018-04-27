import axios from 'axios';

export const makeRequest = (object) => {
    console.log("sendData object is ", object);
    return (dispatch) => {
        let url = 'http://api.icndb.com/jokes/random';
        axios.get(url, ((res) => {
                dispatch(getAnswer({
                    ...object,
                    result: res
                }))
            })
        );
    };
};

const getAnswer = (object) => {
    return {
        type: 'GET_ANSWER',
        payload: object
    }
};