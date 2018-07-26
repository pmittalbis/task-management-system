import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { getAuthUser, signup } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAuthUser,
    signup,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
