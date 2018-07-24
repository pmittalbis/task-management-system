import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { getAuthUser, updateProfile } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAuthUser,
    updateProfile
  }, dispatch);
}

function mapStateToProps(state) {
  debugger
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
