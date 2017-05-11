import React from 'react';
import Navbar from './navbar/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
