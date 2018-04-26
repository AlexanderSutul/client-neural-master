import {combineReducers} from 'redux';
import DataReducers from './data';
import SettingsReducer from './app_settings';

const allReducers = combineReducers({
    data: DataReducers,
    settings: SettingsReducer
});

export default allReducers;