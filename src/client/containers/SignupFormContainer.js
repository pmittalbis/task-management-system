import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { signup } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signup,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
