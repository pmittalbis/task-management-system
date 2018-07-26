import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TasksPanel from '../components/TasksPanel';
import { getTasks, notifyUser, updateTask } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTasks,
    notifyUser,
    updateTask,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
    users: state.UserReducer.users,
    tasks: state.UserReducer.tasks,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPanel);
