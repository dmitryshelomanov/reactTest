import React, { Component } from 'react';
import MenuContainer from '../container/MenuContainer';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="container">
        <MenuContainer/>
        <div className="row">
          <div className="col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;