const defaultStates = {
    sex: '',
    age: '',
    height: '',
    bodyMass: '',
    chest: '',
    bodyMassIndex: '',
    shoulder: '',
    forearm: '',
    shin: '',
    lean: '',
    result: '',
    type: '',
    isErrors: true
};

export default (state = defaultStates, action) => {
    switch (action.type) {
        case 'GET_ANSWER':
            return {
                ...action.payload,
                show: true
            };
        case 'CHANGED_DATA':
            let isError = false;
            for (let key in action.payload) {
                let value = action.payload[key];
                if (key === 'result') continue;
                if (value === '') {
                    isError = true;
                }
            }
            return {
                ...action.payload,
                isErrors: isError
            };
        case 'CLEAR_RESULT':
            return {
            ...action.payload,
            result: ''
        };
        default:
            return state;
    }
}
