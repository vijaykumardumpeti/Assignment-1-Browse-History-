import {Component} from 'react'

import './index.css'

class ListItem extends Component {
  deleteFunction = () => {
    const {eachObject, deleteListItem} = this.props
    const {id} = eachObject
    deleteListItem(id)
  }

  render() {
    const {eachObject, key} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = eachObject

    return (
      <li className="list-item-container" key={key}>
        <div className="medium-container">
          <p>{timeAccessed}</p>
          <div className="small-container">
            <img className="app-logo" alt="domain logo" src={logoUrl} />
            <p>{title}</p>
            <p>{domainUrl}</p>
          </div>
        </div>

        <button
          onClick={this.deleteFunction}
          className="button-style"
          type="button"
        >
          <img
            className="button-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </li>
    )
  }
}

export default ListItem
