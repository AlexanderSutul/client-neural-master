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
    errors: []
};



export default function (state = defaultStates, action) {
    switch (action.type) {
        case 'SEND_DATA':
            console.log(action.type, action.payload);
            let isError = false;
            for (let key in action.payload) {
                let value = action.payload[key];
                if (value === '') {
                    isError = true;
                    console.log(`${key} have not value`)
                    action.payload.errors.push(
                        {
                            name: key
                        }
                    );
                }
            }
            if (isError === true) {
                console.log("is error ", isError);
                return {
                    ...action.payload
                }
            }
            return {
                ...action.payload,
                show: true,
                result: 'Here is a data'
            };

        case 'CHANGED_DATA':
            return {
                ...action.payload
            };
        default:
            return state;
    }
}