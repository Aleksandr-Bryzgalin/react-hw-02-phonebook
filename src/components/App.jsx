import { Component } from 'react';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;
