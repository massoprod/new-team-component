import React, { Component } from 'react';

// Components
import AddUserForm from './components/AddUserForm';

class App extends Component {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <AddUserForm />
      </div>
    );
  }
}

export default App;
