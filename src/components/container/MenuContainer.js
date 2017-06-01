import React, { Component } from 'react';
import { buildings } from '../../helpers/Scorocode';
import Menu from '../views/Menu';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentWillMount() {
    buildings().then(response => {
      this.setState({data: response.result});
    });
  }

  render() {
    return <Menu data={this.state.data}/>
  }
}

export default MenuContainer;