export default (state = {}, action) => {
    switch (action.type) {
        case 'SEND_DATA':
            console.log(action.type, action.payload);
            action.payload.show = true;
            return action.payload;
        default:
            return state;
    }
}