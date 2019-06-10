import { combineReducers } from 'redux';
import CarServiceSelected from './CarServiceSelected';
import LocationSelected from './LocationSelected';
import VehicleSelected from './VehicleSelected'
import DateSelected from './DateSelected';
import LoginCheck from './LoginCheck';
import MerchantInfo from './MerchantInfo';

export default combineReducers({
    CarServiceSelected,
    LocationSelected,
    VehicleSelected,
    DateSelected,
    LoginCheck,
    MerchantInfo
});