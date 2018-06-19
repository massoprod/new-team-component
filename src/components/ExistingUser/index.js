import React, { Component } from 'react';
import styles from './style.css';
const classes = require('react-style-classes');

class ExistingUserForm extends Component {

  constructor (props) {
    super(props)
 
    this.state = {
      users: [],
      selectedUser: null,
    };
  };

  componentDidMount() {
    const loadedUsers = [
      { id: 1, name: 'Karol Mrkva', role: 'admin' },
      { id: 2, name: 'Adam Zemiačik', role: 'designer' },
      { id: 3, name: 'Karolína Mrkvová', role: 'admin' },
      { id: 4, name: 'Majko Zeler', role: 'admin' },
      { id: 5, name: 'Patrik Špenát', role: 'manager' },
      { id: 6, name: 'Adam Baklažán', role: 'client' },
    ];

    this.setState({ users: loadedUsers });
  };

  handleUserSelectChange = (event) => {
    this.setState({selectedUser: event.target.value});
  };

  onExistingSave = () => {
    this.setState({selectedUser: this.state.selectedUser});
    // todo: save new user
  };

  render() {
    const { users } = this.state;

    return (
      <div className={styles.formWrapper}>
        <div className={'form-group'}>
          <label className={styles.formLabel}>
            Select a user:
          </label>
          <select style={{ marginTop: 5, marginBottom: 20 }} className={classes('form-control', styles.formSelectInput)} value={this.state.value} onChange={this.handleUserSelectChange}>
            <option key={-1} disabled selected>SELECT USER FROM LIST</option>
            {
              users.map( (user, index) => {
                return (
                  <option key={index} value={user.id}>
                    { `${user.name} (${user.role})` }
                  </option>
                );
              })
            }
          </select>
          <button className={styles.confirmButton} onClick={this.onExistingSave}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default ExistingUserForm;
