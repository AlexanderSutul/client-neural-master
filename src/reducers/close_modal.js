export default (state = {}, action) => {
    switch (action.type) {
        case 'CLOSE_MODAL':
            console.log(action.type, action.payload);
            action.payload.show = false;
            return action.payload;
            break;
        default:
            return state;
    }
}