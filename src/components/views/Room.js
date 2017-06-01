import React, { Component } from 'react';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      count: 0,
      edit: null,
      tempName: '',
      tempCount: ''
    };
  }

  nameChange(event) {
   this.setState({
      name: event.target.value
    });
  }

  countChange(event) {
   this.setState({
      count: event.target.value
    });
  }

  showUpdate(index, name, count) {
      this.setState({
        edit: index,
        tempName: name,
        tempCount: count
      });
  }

  refactoreName (event) {
    this.setState({
      tempName: event.target.value
    });
  }

  refactoreCount (event) {
    this.setState({
      tempCount: event.target.value
    });
  }

  update(k, event) {
    if (event.keyCode === 13) {
      this.props.equips[k].count = this.state.tempCount;
      this.props.equips[k].name = this.state.tempName;
      this.props.update(this.props.equips[k]);
      this.setState({
         edit: null
      });
    } else if (event.keyCode === 27) {
      this.setState({
         edit: null
      });
    }
  }

  render() {
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
            <th>#</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Действие</th>
          </tr>
          </thead>
          <tbody>
            {this.props.equips.map((i, k) => 
              <tr key={k}>
                <td>{k + 1}</td>
                <td>
                  {this.state.edit !== k 
                  ? <span onDoubleClick={this.showUpdate.bind(this, k, i.name, i.count)}>{i.name}</span>
                  : <input 
                      className="form-control" 
                      type="text"
                      value={this.state.tempName}
                      onChange={this.refactoreName.bind(this)}
                      onKeyUp={this.update.bind(this, k)}/>}
                </td>
                <td>
                    {this.state.edit !== k 
                  ? <span onDoubleClick={this.showUpdate.bind(this, k, i.name, i.count)}>{i.count}</span>
                  : <input 
                      className="form-control" 
                      type="text"
                      value={this.state.tempCount}
                      onChange={this.refactoreCount.bind(this)}
                      onKeyUp={this.update.bind(this, k)}/>}
                </td>
                <td>
                  <input 
                    type="button" 
                    className="btn btn-warning" 
                    value="удалить" 
                    onClick={() => {this.props.deleted(i._id, k)}}/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="col-lg-12">
          <form>
            <div className="form-group">
              <label htmlFor="name">Название</label>
              <input type="text" className="form-control" onChange={this.nameChange.bind(this)}/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Количество</label>
              <input type="number" className="form-control" onChange={this.countChange.bind(this)}/>
            </div>
            <input 
              type="button" 
              className="btn btn-primary" 
              value="добавить"
              onClick={() => {this.props.add(this.state.name, this.state.count, this.props.id)}}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Room;