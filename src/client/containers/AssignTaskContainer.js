import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AssignTask from '../components/AssignTask';
import { getUsers, assignTask } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    assignTask,
    getUsers,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
    users: state.UserReducer.users,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignTask);
