import React, { Component } from 'react';
import {buildings} from '../../helpers/Scorocode';
import BuildTree from './BuildTree';

class Building extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <BuildTree data={this.props.data}/>
      </div>
    );
  }
}

export default Building;