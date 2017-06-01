import React, { Component } from 'react';
import {buildings} from '../../helpers/Scorocode';
import Building from '../views/Building';

class BuildingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      buildings: [],
      name: ''
    };
  }

  getData() {
    buildings().then(response => {
      response.result.forEach((v, k) => {
        if (!this.flag) {
          this.recursive(v, k);
        }
      }); 
    });
    this.setState({
      flag: false
    });
  }

  componentWillMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.getData();
    }
  }
  
  recursive(v, k) {
    if (!this.flag) {
      if (this.props.params.id === v.id || this.props.params.id === v._id) {
          this.setState({
            buildings: v.rooms || v.children,
            name: v.name,
            flag: true
          });
      } else {
        for (let pop in v) {
          if (typeof v[pop] === "object" && v[pop].length > 0 && this.state.flag === false) {
            for (let i = 0; i < v[pop].length; i++) {
              this.recursive(v[pop][i], k)
            }
          }
        }
      }
    }
  }

  render() {
    return(
      <div>
        <Building name={this.state.name} data={this.state.buildings}/>
      </div>
    );
  }
}

export default BuildingContainer;