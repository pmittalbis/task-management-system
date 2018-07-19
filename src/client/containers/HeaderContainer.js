import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.UserReducer.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
