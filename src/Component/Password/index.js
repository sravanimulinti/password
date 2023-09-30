import './index.css'

const Password = props => {
  const {data, deleteItem} = props
  const {website, username, password, isWrong} = data

  const onDeletebtn = id => {
    deleteItem(id)
  }

  const ftxt = website.slice(0, 1)

  return (
    <div>
      <li>
        <p>{ftxt}</p>
        <p>{username}</p>

        <p>{password}</p>
        <p>
          {!isWrong && (
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

export default Password
