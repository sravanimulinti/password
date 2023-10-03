import {Component} from 'react'
import './index.css'

class Password extends Component {
  render() {
    const {data, deleteList} = this.props
    const {web, user, id, isRight} = data

    const onDeletebtn = () => {
      deleteList(id)
    }

    const ftxt = web.slice(0, 1).upercase()

    return (
      <div>
        <li>
          <p>{web}</p>
          <p>{ftxt}</p>

          <p>{user}</p>
          <p>
            {!isRight && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            )}
          </p>
          <button type="button" onClick={onDeletebtn} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
            />
          </button>
        </li>
      </div>
    )
  }
}

export default Password
