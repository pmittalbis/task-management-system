import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { setCurrentUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentUser,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
