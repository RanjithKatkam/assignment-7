import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome, AiFillFire, AiFillHeart, AiFillSave} from 'react-icons/ai'
import NxtWatchContext from '../../NxtWatchContext'
import {
  SideBarMainContainer,
  ContactHeading,
  Div,
  Headings,
  Para,
} from './SideBarStyledComponent'
import './index.css'

class SideBar extends Component {
  render() {
    const {location} = this.props

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, onChangeActiveTab} = value

          const onChangeHomeTab = () => {
            onChangeActiveTab('Home')
          }

          const onChangeTrendingTab = () => {
            onChangeActiveTab('Trending')
          }

          const onChangeGamingTab = () => {
            onChangeActiveTab('Gaming')
          }

          const onChangeSavedTab = () => {
            onChangeActiveTab('Saved')
          }

          return (
            <SideBarMainContainer bgColor={darkMode ? '#313131' : '#fff'}>
              <div>
                <Link className="link" to="/">
                  <Div
                    bgColor={
                      darkMode && location.pathname === '/' ? '#606060' : null
                    }
                    className={location.pathname === '/' ? 'active' : null}
                    onClick={onChangeHomeTab}
                  >
                    <AiFillHome
                      className={location.pathname === '/' ? 'icon1' : 'icon'}
                    />
                    <Headings
                      Color={
                        darkMode && location.pathname === '/'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                      className={
                        darkMode && (location.pathname === '/') === false
                          ? 'sidebar-heading'
                          : null
                      }
                    >
                      Home
                    </Headings>
                  </Div>
                </Link>
                <Link className="link" to="/trending">
                  <Div
                    bgColor={
                      darkMode && location.pathname === '/trending'
                        ? '#606060'
                        : null
                    }
                    className={
                      location.pathname === '/trending' ? 'active' : null
                    }
                    onClick={onChangeTrendingTab}
                  >
                    <AiFillFire
                      className={
                        location.pathname === '/trending' ? 'icon1' : 'icon'
                      }
                    />
                    <Headings
                      Color={
                        darkMode && location.pathname === '/trending'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                      className={
                        darkMode &&
                        (location.pathname === '/trending') === false
                          ? 'sidebar-heading'
                          : null
                      }
                    >
                      Trending
                    </Headings>
                  </Div>
                </Link>
                <Link className="link" to="/gaming">
                  <Div
                    bgColor={
                      darkMode && location.pathname === '/gaming'
                        ? '#606060'
                        : null
                    }
                    className={
                      location.pathname === '/gaming' ? 'active' : null
                    }
                    onClick={onChangeGamingTab}
                  >
                    <AiFillHeart
                      className={
                        location.pathname === '/gaming' ? 'icon1' : 'icon'
                      }
                    />
                    <Headings
                      Color={
                        darkMode && location.pathname === '/gaming'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                      className={
                        darkMode && (location.pathname === '/gaming') === false
                          ? 'sidebar-heading'
                          : null
                      }
                    >
                      Gaming
                    </Headings>
                  </Div>
                </Link>
                <Link className="link" to="/saved-videos">
                  <Div
                    bgColor={
                      darkMode && location.pathname === '/saved-videos'
                        ? '#606060'
                        : null
                    }
                    className={
                      location.pathname === '/saved-videos' ? 'active' : null
                    }
                    onClick={onChangeSavedTab}
                  >
                    <AiFillSave
                      className={
                        location.pathname === '/saved-videos' ? 'icon1' : 'icon'
                      }
                    />
                    <Headings
                      Color={
                        darkMode && location.pathname === '/saved-videos'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                      className={
                        darkMode &&
                        (location.pathname === '/saved-videos') === false
                          ? 'sidebar-heading'
                          : null
                      }
                    >
                      Saved Videos
                    </Headings>
                  </Div>
                </Link>
              </div>
              <div className="div">
                <ContactHeading color={darkMode ? '#fff' : '#000'}>
                  CONTACT US
                </ContactHeading>
                <div className="social-media-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="social-media-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="social-media-logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="social-media-logo"
                  />
                </div>
                <Para color={darkMode ? '#fff' : '#000'}>
                  Enjoy! Now to see your channels and recommendations!
                </Para>
              </div>
            </SideBarMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
