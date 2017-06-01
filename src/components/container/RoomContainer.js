import React, { Component } from 'react';
import {equipment, remove, update, add} from '../../helpers/Scorocode';
import Room from '../views/Room';

class BuildingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equips: []
    };
  }
  /**
   * Получаем данные все, выбираем для нужной комнаты и рендеримы
   */
  getEqipInfo() {
    let data = [];
		equipment().then(response => {
			response.result.forEach((i, k) => {
				if (i.room === this.props.params.id) {
          data.push(i);
        }
			});
      this.setState({
        equips: data
      });
		});
  }

  componentWillMount() {
    this.getEqipInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.getEqipInfo();
    }
  }

  /**
   * удаление оборудования
   * все подобные свойства вызываются из "тупого компонента"
   */
  deleted(id, index) {
    remove(id).then(response => {
      this.state.equips.splice(index, 1);
      this.setState({
        equips: this.state.equips
      });
    });
  }

  /**
   * изменение
   */
  update(item) {
			update(item).then(response => {
				console.log('updated');
			})
  }

  /**
   * добавление
   */
  add(name, count, id) {
    add({name, count, id}).then(response => {
      this.state.equips.push(response);
      this.setState({
        equips: this.state.equips
      });
    });
  }

  render() {
    return(
      <div>
        <Room 
          id={this.props.params.id}
          equips={this.state.equips}
          deleted={this.deleted.bind(this)}
          add={this.add.bind(this)}
          update={this.update.bind(this)}/>
      </div>
    );
  }
}

export default BuildingContainer;