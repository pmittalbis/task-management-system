import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getCurrentUser, setCurrentUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCurrentUser,
    setCurrentUser,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
