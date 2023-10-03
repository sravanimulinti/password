import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Password from '../Password'
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
    const {website, username, password, isWrong} = this.state
    const newForm = {
      id: uuidv4(),
      web: website,
      user: username,
      pass: password,
      ps: isWrong,
    }

    this.setState(prevState => ({
      allData: [...prevState.allData, newForm],
      website: '',
      username: '',
      password: '',
      isRight: true,
      search: '',
    }))
  }

  deleteItem = id => {
    const {allData} = this.state
    this.setState({allData: allData.filter(eachObj => eachObj.id !== id)})
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = e => {
    this.setState({password: e.target.value})
  }

  onSearch = line => {
    this.setState({search: line.target.value})
  }

  render() {
    const {
      // eslint-disable-next-line
      isWrong,
      allData,
      // eslint-disable-next-line
      isRight,
      website,
      username,
      password,
      // eslint-disable-next-line
      search,
    } = this.state

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="img"
          alt="app logo"
        />
        <div className="bg1">
          <form onSubmit={this.addNewForm}>
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
                  value={website}
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
                  value={username}
                  onChange={this.onUsername}
                  placeholder="Enter Username"
                  className="input1"
                />
              </div>
              <div className="box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="img1"
                  alt="password"
                />

                <input
                  type="password"
                  value={password}
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
            <p className="">{allData.length}</p>
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
            <input type="checkbox" className="check" id="password" />
            <label className="para" htmlFor="password">
              Show Password
            </label>
          </div>
          <div>
            <ul className="un">
              {allData.map(eachObj => (
                <Password
                  key={eachObj.id}
                  data={eachObj}
                  deleteList={this.deleteItem}
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
                  className="image"
                />
                <p>No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
