import { connect } from 'react-redux';
import {loginCheckAction} from '../actions/index';
import RegistrationPage from '../components/RegistrationPage';

const mapStateToProps = (state) => ({
    CarServiceSelected: state.CarServiceSelected,
    LoginCheck: state.LoginCheck
});

const mapDispatchToProps = (dispatch) => ({
    loginCheckAction: (flag) => dispatch(loginCheckAction(flag))
})

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationPage);