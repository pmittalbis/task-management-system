import axios from 'axios';
import React from 'react';
import Footer from './Footer';
import HeaderContainer from '../containers/HeaderContainer';
import '../App.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    }
  }

  handleFileChange(e) {
    console.log(e.target.files[0]);
    this.setState({
      img: e.target.files[0]
    })
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('image', this.state.img, this.state.img.name);
    console.log("formData === ", formData);
    axios.put(`http://localhost:4000/UploadProfile/${this.props.user._id}`, formData)
     .then((res) => {
       this.props.setCurrentUser(res.data)
       console.log("Updated user ", res.data)
     })
     .catch((err) => { console.log(err) });
  }
  render() {
    const path = "http://localhost:4000/";
    if (this.props.user === null) {
      this.props.history.push("/");
      return (
        <h5>You must login first.</h5>
      )
    } else {
      return (
        <div>
          <HeaderContainer />
          <img className="center-block profile" alt="profile-pic" src={path + this.props.user.profilePic} />
          <input className="center-block" accept="image/*" type="file" onChange={(e) => { this.handleFileChange(e) }} />
          <button className="btn btn-info" onClick={() => { this.handleSubmit(); }}>Submit</button>
          <h2>Welcome {this.props.user.name}!</h2>
          <p>{this.props.user.email}</p>
          <Footer />
        </div>
      )
    }
  }
}

export default LoginForm;
