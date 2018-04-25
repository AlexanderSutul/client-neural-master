import {combineReducers} from 'redux';
import DataReducers from './data';
import SendData from './send_data';
import CloseModal from './close_modal'

const allReducers = combineReducers({
    data: DataReducers,
    sendData: SendData,
});

export default allReducers;