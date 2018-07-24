import React from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../constants';
import Footer from './Footer';
import HeaderContainer from '../containers/HeaderContainer';
import '../App.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    }
  }

  async componentWillMount() {
    await this.props.getAuthUser();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    debugger
    if(nextProps !== this.props) {
      if (!nextProps.user) {
        this.props.history.push("/");
      }
    }
  }

  notify(msg) {
    toast(msg);
  }

  handleFileChange(e) {
    console.log(e.target.files[0]);
    this.setState({
      img: e.target.files[0]
    })
  }

  handleSubmit() {
    const formData = new FormData();
    this.refs.file.value = null;
    formData.append('image', this.state.img, this.state.img.name);
    this.props.updateProfile(formData, this.props.user._id);
  }
  render() {
    if (!this.props.user) {
      return (
        <h5>You must login first.</h5>
      )
    } else {
      return (
        <div>
          <HeaderContainer />
          <img className="center-block profile" alt="profile-pic" src={API_URL + this.props.user.profilePic} />
          <input className="center-block" accept="image/*" ref="file" type="file" onChange={(e) => { this.handleFileChange(e) }} />
          <button className="btn btn-info text-center" onClick={() => { this.handleSubmit(); }}>Submit</button>
          <h2>Welcome {this.props.user.name}!</h2>
          <p>{this.props.user.email}</p>
          <Footer />
        </div>
      )
    }
  }
}

export default Profile;
