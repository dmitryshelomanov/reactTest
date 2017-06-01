import React, { Component } from 'react';
import BuildTree from './BuildTree';
import icon from '../../static/img/menu.png';
import { Link } from 'react-router';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {show: false};
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return(
      <div>
        <img src={icon} alt="" className="open" onClick={this.toggle}/>
          {this.state.show 
          ? <div className="menu">
              <ul>
                <li><Link to="/">Главная</Link></li>
              </ul>
              <BuildTree data={this.props.data}/>
            </div>
          : null}
      </div>
    );
  }
}

export default Menu;