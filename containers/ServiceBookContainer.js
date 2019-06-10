import { connect } from 'react-redux';
import {loginCheckAction,merchantInfoAction} from '../actions/index';
import ServiceBook from '../components/ServiceBook';

const mapStateToProps = (state) => ({VehicleSelected: state.VehicleSelected,
	CarServiceSelected: state.CarServiceSelected,
	DateSelected: state.DateSelected,
	LocationSelected: state.LocationSelected,
	LoginCheck: state.LoginCheck,
	MerchantInfo: state.MerchantInfo
});

const mapDispatchToProps = (dispatch) => ({
	loginCheckAction: (flag) => dispatch(loginCheckAction(flag)),
	merchantInfoAction: (merchantInfoArray) => dispatch(merchantInfoAction(merchantInfoArray))
});

export default connect(mapStateToProps,mapDispatchToProps)(ServiceBook);