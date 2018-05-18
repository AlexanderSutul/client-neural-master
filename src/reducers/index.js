import {combineReducers} from 'redux';
import DataReducers from './data';
import SettingsReducer from './app_settings';
import Patients from './patients';

const allReducers = combineReducers({
    data: DataReducers,
    settings: SettingsReducer,
    patients: Patients
});

export default allReducers;
