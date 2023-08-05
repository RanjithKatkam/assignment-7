import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {HeaderMainContainer, SubContainer} from './HeaderStyledComponents'
import NxtWatchContext from '../../NxtWatchContext'
import './index.css'

class Header extends Component {
  state = {displayMenu: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onToggleMenu = () => {
    this.setState(prev => ({displayMenu: !prev.displayMenu}))
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, onToggleDarkMode} = value
          const {displayMenu} = this.state

          const headerLogo = darkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const changeTheme = () => {
            onToggleDarkMode()
          }

          return (
            <>
              <HeaderMainContainer bgColor={darkMode ? '#313131' : '#fff'}>
                <div>
                  <Link to="/">
                    <img
                      src={headerLogo}
                      alt="website logo"
                      className="header-logo"
                    />
                  </Link>
                </div>
                <SubContainer>
                  {darkMode ? (
                    <li>
                      <button
                        onClick={changeTheme}
                        data-testid="theme"
                        className="theme-button"
                        type="button"
                      >
                        <BiSun className="sun" />
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        onClick={changeTheme}
                        data-testid="theme"
                        className="theme-button"
                        type="button"
                      >
                        <FaMoon className="moon" />
                      </button>
                    </li>
                  )}
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile"
                  />
                  <button
                    onClick={this.onToggleMenu}
                    className="menu-icon"
                    type="button"
                  >
                    <AiOutlineMenuUnfold color={darkMode ? 'white' : 'black'} />
                  </button>
                  <Popup
                    modal
                    trigger={
                      <button
                        className={
                          darkMode
                            ? 'dark-logout-button logout'
                            : 'light-logout-button logout'
                        }
                        type="button"
                      >
                        Logout
                      </button>
                    }
                    className="popup-content logout-button-popup"
                  >
                    {close => (
                      <div className="popup-overlay">
                        <div className="popup-container">
                          <p className="popup-heading">
                            Are you sure, you want to logout
                          </p>
                          <div className="buttons-container">
                            <button
                              className="popup-cancel-button"
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </button>
                            <button
                              onClick={this.onClickLogout}
                              className="popup-logout-button"
                              type="button"
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <button className="logout-icon" type="button">
                        <FiLogOut color={darkMode ? 'white' : 'black'} />
                      </button>
                    }
                    className="popup-content logout-icon-popup"
                  >
                    {close => (
                      <div className="popup-overlay">
                        <div className="popup-container">
                          <p className="popup-heading">
                            Are you sure, you want to logout
                          </p>
                          <div className="buttons-container">
                            <button
                              className="popup-cancel-button"
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </button>
                            <button
                              onClick={this.onClickLogout}
                              className="popup-logout-button"
                              type="button"
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </SubContainer>
              </HeaderMainContainer>
              {displayMenu && (
                <ul className="toggleMenu">
                  <Link className="link" to="/">
                    <li>
                      <button className="toggleButtons" type="button">
                        Home
                      </button>
                    </li>
                  </Link>
                  <Link className="link" to="/trending">
                    <li>
                      <button className="toggleButtons" type="button">
                        Trending
                      </button>
                    </li>
                  </Link>
                  <Link className="link" to="/gaming">
                    <li>
                      <button className="toggleButtons" type="button">
                        Gaming
                      </button>
                    </li>
                  </Link>
                  <Link className="link" to="/saved-videos">
                    <li>
                      <button className="toggleButtons" type="button">
                        Saved Videos
                      </button>
                    </li>
                  </Link>
                </ul>
              )}
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
