import './index.css'

const YourPasswords = props => {
  const {userDetails, deleteUserDetails, checkBox, listLength} = props
  const {id, website, username, password} = userDetails
  const initials = website[0].toUpperCase()

  const onClickDelete = () => {
    deleteUserDetails(id)
  }

  const renderYourPasswordsContainer = () => (
    <li className="listContainer">
      <div className="initialsContainer">
        <h1 className="initials">{initials}</h1>
      </div>
      <div className="detailsContainer">
        <p className="sizing">{website}</p>
        <p className="sizing">{username}</p>
        {checkBox ? (
          <p className="sizing">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="starsIMage"
          />
        )}
      </div>
      <button
        type="button"
        className="deleteButt"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )

  return <div className="bgContainer2">{renderYourPasswordsContainer()}</div>
}

export default YourPasswords
