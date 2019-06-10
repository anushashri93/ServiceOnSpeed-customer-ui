import { connect } from 'react-redux';
import {vehicleTypeSelectedAction,dateSelectedAction} from '../actions/index';
import SelectVehicle from '../components/SelectVehicle';

const mapDispatchToProps= (dispatch) => ({
    vehicleTypeSelectedAction: (index) => dispatch(vehicleTypeSelectedAction(index)),
    dateSelectedAction: (date) => dispatch(dateSelectedAction(date))
})

export default connect(null, mapDispatchToProps)(SelectVehicle);