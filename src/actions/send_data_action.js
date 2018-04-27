import axios from 'axios';

export const makeRequest = (object) => {
    console.log("makeRequest object is ", object);
    return (dispatch) => {
        let url = 'http://api.icndb.com/jokes/random';
        axios.get(url)
            .then(response => {
                object.result = response;
                dispatch({
                    type: 'GET_ANSWER',
                    payload: object
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
};
