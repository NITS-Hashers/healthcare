import React from 'react';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.profile ? props.profile.name : '',
      email: props.profile ? props.profile.email : '',
      phone: props.profile ? props.profile.phone : '',
      address: props.profile ? props.profile.address : '',
      zip: props.profile ? props.profile.zip : '',
      experience: props.profile ? props.profile.experience : '',
      pdonor: props.profile ? props.profile.pdonor : false,
      bgroup: props.profile ? props.profile.bgroup : '',
      error: ''
    };
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  onZipChange = (e) => {
    const zip = e.target.value;
    this.setState(() => ({ zip }));
  };
  onExperienceChange = (e) => {
    const experience = e.target.value;
    this.setState(() => ({ experience }));
  };
  onPdonorChange = (e) => {
      if (e.target.value === 'true') {
        this.setState(() => ({ pdonor: true }));
      } else if (e.target.value === 'false') {
        this.setState(() => ({ pdonor: false }));
      }
  }
  onBgroupChange = (e) => {
    const bgroup = e.target.value;
    if(bgroup !== 'select') {
      this.setState(() => ({ bgroup }));
    }
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.address || !this.state.email || !this.state.name || !this.state.phone || !this.state.zip) {
      this.setState(() => ({ error: 'Please provide name, email, address and pincode.!' }));
    } else if (this.state.pdonor && !this.state.bgroup) {
      this.setState(() => ({ error: 'Please provide blood group if you wish to donate plasma.!' }));
    }else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        zip: this.state.zip,
        experience: this.state.experience,
        pdonor: this.state.pdonor,
        bgroup: this.state.bgroup
      });
    }
  };
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
        
        <label>Name</label>
        <input
        autoFocus
        type="text"
        placeholder="Name"
        className="text-input"
        value={this.state.name}
        onChange={this.onNameChange}
        />
        <label>Email</label>
        <input
        type="email"
        placeholder="Email"
        className="text-input"
        value={this.state.email}
        onChange={this.onEmailChange}
        />
        <label>Phone Number</label>
          <input
          type="text"
          placeholder="Phone"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            className="text-input"
            value={this.state.address}
            onChange={this.onAddressChange}
          />
          <label>Pincode</label>
          <input
          type="text"
          placeholder="Pincode"
          className="text-input"
          value={this.state.zip}
          onChange={this.onZipChange}
          />
          <label>Write your experience...</label>
          <textarea
            placeholder="Add your experience as a covid-19 patient."
            className="textarea"
            value={this.state.experience}
            onChange={this.onExperienceChange}
          >
          </textarea>
          <label>Are you willing to donate Plasma?</label>
          <select
              className="select"
              value={this.state.pdonor}
              onChange={this.onPdonorChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Blood Group</label>
            <select
              className="select"
              value={this.state.bgroup}
              onChange={this.onBgroupChange}
            >
              <option value="select">Select your bloodgroup</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <div>
            <h1></h1>
            <button className="button">Save Profile</button>          
          </div>
        </form>
    )
  }
}
