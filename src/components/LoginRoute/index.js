import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  MainContainer,
  InputContainer,
  FormContainer,
  LoginButton,
} from './LoginRouteStyledComponents'
import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showSubmitMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitMsg: true})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(responseData.jwt_token)
    } else {
      this.onSubmitFailure(responseData.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showSubmitMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainContainer>
        <FormContainer onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="logo-image"
          />
          <InputContainer width="100%" display="flex" direction="column">
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              placeholder="Enter Username"
              className="input"
              type="text"
              id="username"
              onChange={this.onChangeUserName}
              value={username}
            />
          </InputContainer>
          <InputContainer width="100%" display="flex" direction="column">
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              placeholder="Enter Password"
              className="input"
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={this.onChangePassword}
              value={password}
            />
          </InputContainer>
          <InputContainer
            margin="10px"
            width="100%"
            display="flex"
            direction="row"
          >
            <input
              onChange={this.onToggleCheckbox}
              className="checkbox"
              type="checkbox"
              id="show password"
            />
            <label className="label1" htmlFor="show password">
              Show Password
            </label>
          </InputContainer>
          <LoginButton className="login-button" type="submit">
            Login
          </LoginButton>
          {showSubmitMsg && <p className="error-msg">{`*${errorMsg}`}</p>}
        </FormContainer>
      </MainContainer>
    )
  }
}

export default LoginRoute
