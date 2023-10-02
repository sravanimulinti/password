import './index.css'

const Password = props => {
  const {data, deleteList} = props
  const {web, user, pass, isFavorite, id} = data

  const onDeletebtn = () => {
    deleteList(id)
  }

  const ftxt = web.slice(0, 1)

  return (
    <div>
      <li className="">
        <p>{ftxt}</p>
        <p>{user}</p>

        <p>{pass}</p>
        <p>
          {!isFavorite && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="img1"
            />
          )}
        </p>
        <button type="button" onClick={onDeletebtn} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="img1"
          />
        </button>
      </li>
    </div>
  )
}

export default Password
