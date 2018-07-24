import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getCurrentUser, getAuthUser, setCurrentUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrentUser,
    getAuthUser,
    setCurrentUser,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
