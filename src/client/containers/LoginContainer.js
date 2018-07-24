import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { getAuthUser, login } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAuthUser,
    login,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
