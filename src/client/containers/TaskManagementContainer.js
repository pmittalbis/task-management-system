import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TaskManagement from '../components/TaskManagement';
import { getCurrentUser, getAuthUser, setCurrentUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAuthUser,
    getCurrentUser,
    setCurrentUser,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManagement);
