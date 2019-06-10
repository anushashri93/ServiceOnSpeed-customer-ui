import { connect } from 'react-redux'
import OtpLogin from '../components/OtpLogin';
import {loginCheckAction} from '../actions/index';

const mapStateToProps = (state) => ({
    CarServiceSelected: state.CarServiceSelected,
    LoginCheck: state.LoginCheck
});

const mapDispatchToProps = (dispatch) => ({
    loginCheckAction: (flag) => dispatch(loginCheckAction(flag))
});

export default connect(mapStateToProps,mapDispatchToProps)(OtpLogin);