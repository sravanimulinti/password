import {Component} from 'react'
import Password from '../Password'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    isRight: false,
    website: '',
    allData: [],
    username: '',
    password: '',
    isWrong: false,
  }

  AddNewForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newForm = {
      id: uuidv4(),
      web: website,
      user: username,
      pass: password,
      isFavorite: isRight,
    }

    this.setState(prevState => ({
      allData: [...prevState.allData, newForm],
      website: '',
      username: '',
      password: '',
      isRight: false,
      search: '',
    }))

    deleteItem = id => {
      const {allData} = this.state
      this.setState({allData: allData.filter(eachObj => eachObj.id !== id)})
    }

    onWebsite = e => {
      this.setState({website: e.target.value})
    }
    onSearch = e => {
      this.setState({search: e.target.value})
    }

    onUsername = e => {
      this.setState({username: e.target.value})
    }

    onPassword = e => {
      this.setState({password: e.target.value})
    }

    onSearch = line => {
      this.setState({search: line.target.value})
    }
  
  render() {
    const {isRight, isWrong, allData, website, username, password} = this.state

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="img"
          alt="app logo"
        />
        <div className="bg1">
          <form onsubmit={this.addNewForm}>
            <div className="bg2">
              <h1 className="heading">Add New Password</h1>
              <div className="box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="img1"
                  alt="website"
                />
                <input
                  type="text"
                  onChange={this.onWebsite}
                  placeholder="Enter Website"
                  className="input1"
                />
              </div>
              <div className="box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="img1"
                  alt="username"
                />
                <input
                  type="text"
                  onChange={this.onUsername}
                  placeholder="Enter Username"
                  className="input1"
                />
              </div>
              <div className="box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="img1"
                  alt=""
                />
                <input
                  type="password"
                  onChange={this.onPassword}
                  placeholder="Enter Password"
                  className="input1"
                />
              </div>
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="img3"
            alt="password manager"
          />
        </div>
        <div className="bg3">
          <div className="box">
            <h1 className="heading">Your Passwords</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="img4"
              alt="password"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="img5"
              alt="search"
            />
            <input
              type="search"
              className="input2"
              placeholder="search"
              onChange={this.onSearch}
            />
          </div>
          <hr className="line" />
          <div className="box1">
            <input type="checkbox" className="check" />
            <label className="para" htmlFor="password">
              Show Password
            </label>
          </div>
          <ul className="">
            {allData.map(eachObj => (
              <Password
                key={eachObj.id}
                data={eachObj}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>

        <div>
          {!isRight && (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
        <input type="checkbox" id="check" onChange={this.onTick} />
        <label htmlFor="check">Show Passwords</label>
      </div>
    )
  }
}

export default PasswordManager
