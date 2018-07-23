import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TasksPanel from '../components/TasksPanel';
import { getTasks } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTasks,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger;
  return {
    user: state.UserReducer.currentUser,
    users: state.UserReducer.users,
    tasks: state.UserReducer.tasks,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPanel);
