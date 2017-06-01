import React, { Component } from 'react';
import { Link } from 'react-router';

class BuildTree extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Постройка рекурсивно дерева. 
   * если есть item.children или item.rooms вывести ссылку на building + компонент
   * иначе ссылку на room
   */
  build(item, k) {
    return (
      <li key={k}>
        {item.rooms || item.children
        ? <div>
            <Link to={`/building/${item.id || item._id}`}>{item.name}</Link>
            <BuildTree data={item.rooms || item.children}/>
          </div>
        : <Link to={`/room/${item.id}`}>{item.name}</Link>}
      </li>
    );
  }

  render() {
    return(
      <ul>
        {this.props.data.map(this.build)}
      </ul>
    );
  }
}

export default BuildTree;