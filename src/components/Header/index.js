import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {HeaderMainContainer, SubContainer} from './HeaderStyledComponents'
import NxtWatchContext from '../../NxtWatchContext'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, onToggleDarkMode} = value

        const headerLogo = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const changeTheme = () => {
          onToggleDarkMode()
        }

        return (
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
                <button
                  onClick={changeTheme}
                  data-testid="theme"
                  className="theme-button"
                  type="button"
                >
                  <BiSun className="sun" />
                </button>
              ) : (
                <button
                  onClick={changeTheme}
                  data-testid="theme"
                  className="theme-button"
                  type="button"
                >
                  <FaMoon className="moon" />
                </button>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile"
              />
              <Popup
                model
                trigger={
                  <button
                    className={
                      darkMode ? 'dark-logout-button' : 'light-logout-button'
                    }
                    type="button"
                  >
                    Logout
                  </button>
                }
                className="popup-content"
              >
                {close => (
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
                        onClick={onClickLogout}
                        className="popup-logout-button"
                        type="button"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </SubContainer>
          </HeaderMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
