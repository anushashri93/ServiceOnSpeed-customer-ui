import { connect } from 'react-redux'
import {locationSelectedAction} from '../actions/index';
import SelectPlace from '../components/SelectPlace';

const mapStateToProps = (state) => ({LocationSelected: state.LocationSelected});

const mapDispatchToProps= (dispatch) => ({
    locationSelectedAction: (location) => dispatch(locationSelectedAction(location))
})

export default connect(mapStateToProps,mapDispatchToProps)(SelectPlace);