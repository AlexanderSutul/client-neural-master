const settings = {
    modal: false
};

const OPEN_MODAL = 'OPEN_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export default (state = settings, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...action.payload,
                modal: true
            };
        case HIDE_MODAL:
            return {
                ...action.payload,
                modal: false
            };
        default:
            return state;
    }
}
