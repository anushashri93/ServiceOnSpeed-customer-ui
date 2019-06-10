import { connect } from 'react-redux';
import {carServiceSelectedAction,locationSelectedAction} from '../actions/index';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = (state) => ({
    LoginCheck: state.LoginCheck
})

const mapDispatchToProps= (dispatch) => ({
    carServiceSelectedAction: (array) => dispatch(carServiceSelectedAction(array)),
    locationSelectedAction: (location) => dispatch(locationSelectedAction(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);