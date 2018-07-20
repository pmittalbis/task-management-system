import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AssignTask from '../components/AssignTask';
import { setUsers, setCurrentUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setUsers,
    setCurrentUser,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger;
  return {
    user: state.UserReducer.currentUser,
    users: state.UserReducer.users,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignTask);
