import {Component} from 'react'
import {Link} from 'react-router-dom'
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
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode, activeTab, onChangeActiveTab} = value

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
                      darkMode && activeTab === 'Home' ? '#606060' : null
                    }
                    className={activeTab === 'Home' ? 'active' : null}
                    onClick={onChangeHomeTab}
                  >
                    <AiFillHome
                      className={activeTab === 'Home' ? 'icon1' : 'icon'}
                    />
                    <Headings
                      Color={
                        darkMode && activeTab === 'Home'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                    >
                      Home
                    </Headings>
                  </Div>
                </Link>
                <Link className="link" to="/trending">
                  <Div
                    bgColor={
                      darkMode && activeTab === 'Trending' ? '#606060' : null
                    }
                    className={activeTab === 'Trending' ? 'active' : null}
                    onClick={onChangeTrendingTab}
                  >
                    <AiFillFire
                      className={activeTab === 'Trending' ? 'icon1' : 'icon'}
                    />
                    <Headings
                      Color={
                        darkMode && activeTab === 'Trending'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                    >
                      Trending
                    </Headings>
                  </Div>
                </Link>
                <Link className="link" to="/gaming">
                  <Div
                    bgColor={
                      darkMode && activeTab === 'Gaming' ? '#606060' : null
                    }
                    className={activeTab === 'Gaming' ? 'active' : null}
                    onClick={onChangeGamingTab}
                  >
                    <AiFillHeart
                      className={activeTab === 'Gaming' ? 'icon1' : 'icon'}
                    />
                    <Headings
                      Color={
                        darkMode && activeTab === 'Gaming'
                          ? ' #f9f9f9'
                          : '#606060'
                      }
                    >
                      Gaming
                    </Headings>
                  </Div>
                </Link>
                <Link className="link" to="/saved-videos">
                  <Div
                    bgColor={
                      darkMode && activeTab === 'Saved' ? '#606060' : null
                    }
                    className={activeTab === 'Saved' ? 'active' : null}
                    onClick={onChangeSavedTab}
                  >
                    <AiFillSave
                      className={activeTab === 'Saved' ? 'icon1' : 'icon'}
                    />
                    <Headings
                      Color={
                        darkMode && activeTab === 'Saved'
                          ? ' #f9f9f9'
                          : '#606060'
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

export default SideBar
