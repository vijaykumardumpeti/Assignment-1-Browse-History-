import {Component} from 'react'
import './index.css'

import ListItem from '../ListItem'

class ListContainer extends Component {
  render() {
    const {historyList, deleteListItem} = this.props

    return (
      <div>
        <ul className="lists-container">
          {historyList.map(eachObject => (
            <ListItem
              deleteListItem={deleteListItem}
              eachObject={eachObject}
              key={eachObject.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ListContainer
