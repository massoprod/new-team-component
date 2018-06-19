import React, { Component } from 'react';
import styles from './style.css';

// Components
import NewUserForm from '../NewUser';
import ExistingUserForm from '../ExistingUser';

class AddUserForm extends Component {

  constructor (props) {
    super(props)
 
    this.state = {
      tabIndex: 0,
    };
  };

  changeTabsState = (event) => {
    if ( event.target.value == 0 ) {
      this.setState({tabIndex: 0});
    }
    if ( event.target.value == 1 ) {
      this.setState({tabIndex: 1});
    }
  };

  render() {
    const { tabIndex } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>Add user to the channel</span>
        </div>
        <div className={styles.tabsWrapper}>
          <button onClick={this.changeTabsState} className={ tabIndex == 0 ? styles.activeTab : null } value={0}>Existing user</button>
          <button onClick={this.changeTabsState} className={ tabIndex == 1 ? styles.activeTab : null } value={1}>New user</button>
        </div>
        {tabIndex === 0 ? (<ExistingUserForm />) : (<NewUserForm />) }
      </div>
    );
  }
}

export default AddUserForm;
