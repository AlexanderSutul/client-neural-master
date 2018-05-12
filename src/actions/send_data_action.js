import axios from 'axios';

export const makeRequest = (object) => {
    console.log("makeRequest object is ", object);
    return (dispatch) => {
        // const url = 'http://api.icndb.com/jokes/random';
        const url = 'http://127.0.0.1:5000/answer';
        console.log("sending_object", object);
        axios.post(url, object)
            .then(response => {
                object.result = response;
                dispatch({
                    type: 'GET_ANSWER',
                    payload: object
                });
            })
            .catch((error) => {
                console.log("error", error);)
            })
    }
};
