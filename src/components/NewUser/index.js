import React, { Component } from 'react';
import styles from './style.css';
const classes = require('react-style-classes');

class NewUserForm extends Component {

  constructor (props) {
    super(props)
 
    this.state = {
      roles: [
        {id: 1, name: 'Admin', slug: 'admin', description: 'Admin description'},
        {id: 2, name: 'Manager', slug: 'manager', description: 'Manager description'},
        {id: 3, name: 'Client', slug: 'client', description: 'Client description'},
        {id: 4, name: 'Translator', slug: 'translator', description: 'Translator description'},
        {id: 5, name: 'Designer', slug: 'designer', description: 'Designer description'},
      ],
      selectedRole: null,
      name: '',
      surname: '',
      email: '',
      password: '',
      validEmail: true,
      passwordHidden: true,
    };

    this.onNewUserSubmit = this.onNewUserSubmit.bind(this);
  };

  handleRoleSelectChange = (event) => {
    this.setState({selectedRole: event.target.value});
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleSurnameChange = (event) => {
    this.setState({surname: event.target.value});
  };
  
  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  async onNewUserSubmit() {
    const { email } = this.state;

    try {
      if (this.validateEmail(email)) {
        this.setState({validEmail: true});
      } else {
        this.setState({validEmail: false});
      }
    } catch(e) {
      console.log(e);
    }
    
    return false;
  };

  showOrHidePassword = () => {
    const { passwordHidden } = this.state;
    if(passwordHidden) {
      this.setState({passwordHidden: false});
    } else {
      this.setState({passwordHidden: true});
    }
  };

  render() {
    const { roles, validEmail, passwordHidden } = this.state;

    return (
      <div className={styles.formWrapper}>
          <div className={'form-group'}>
            <label className={styles.formLabel}>
              Role:
            </label>
            <select style={{ marginTop: 5, marginBottom: 10 }} className={classes('form-control', styles.formSelectInput)} value={this.state.value} onChange={this.handleSelectChange}>
              <option key={-1} disabled selected>SELECT USER ROLE FROM LIST</option>
              {
                roles.map( (role, index) => {
                  return (
                    <option key={index} value={role.slug}>
                      { role.name }
                    </option>
                  );
                })
              }
            </select>
          </div>

          <div className={'form-group'}>
            <label className={styles.formLabel}>
              Name:
            </label>
            <input className={classes('form-control', styles.formInput)} type={'text'} onChange={this.handleNameChange} />
          </div>

          <div className={'form-group'}>
            <label className={styles.formLabel}>
              Surname:
            </label>
            <input className={classes('form-control', styles.formInput)} type={'text'} onChange={this.handleSurnameChange} />
          </div>

          <div className={'form-group'}>
            <label className={styles.formLabel}>
              Email:
            </label>
            <input style={{borderColor: !validEmail ? 'red' : null}} className={classes('form-control', styles.formInput)} type={'text'} onChange={this.handleEmailChange} />
          </div>

          <div className={'form-group'}>
            <label className={styles.formLabel}>
              Password:
            </label>
            <div className={'input-group'}>
              <input className={classes('form-control', styles.formInput)} type={ passwordHidden ? 'password' : 'text'} onChange={this.handlePasswordChange} />
              <span onClick={this.showOrHidePassword} className={classes('input-group-addon', styles.passwordBtn)}>
                { passwordHidden ? 'SHOW' : 'HIDE' }
              </span>
            </div>
          </div>

          <button className={styles.confirmButton} onClick={this.onNewUserSubmit}>
            Invite user
          </button>
      </div>
    );
  }
}

export default NewUserForm;
