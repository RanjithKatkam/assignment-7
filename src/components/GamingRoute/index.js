import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillHeart} from 'react-icons/ai'

import {
  GamingMainContainer,
  GamingSubContainer,
  VideoItemContainer,
  GamingFailureMainContainer,
  GamingFailureHeading,
  GamingFailureDescription,
  GamingRetryButton,
  GamingHeading,
  ContentContainer,
} from './GamingRouteStyledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoCard from '../GamingVideoCard'
import NxtWatchContext from '../../NxtWatchContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failed: 'FAILED',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class GamingRoute extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.renderGamingItems()
  }

  renderGamingItems = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const responseData = await response.json()
      console.log(responseData)

      this.setState({
        videosList: responseData.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failed,
      })
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <ContentContainer
              data-testid="gaming"
              bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}
            >
              <div className="container">
                <div className="logo-container">
                  <AiFillHeart className="trending-icon" />
                </div>
                <h1>Gaming</h1>
              </div>
              <VideoItemContainer bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}>
                {videosList.map(eachItem => (
                  <GamingVideoCard details={eachItem} key={eachItem.id} />
                ))}
              </VideoItemContainer>
            </ContentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        const themeImage = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GamingFailureMainContainer
            bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}
          >
            <img
              src={themeImage}
              alt="failure view"
              className="products-failure-img"
            />
            <GamingFailureHeading>
              Oops! Something Went Wrong
            </GamingFailureHeading>
            <GamingFailureDescription>
              We are having some trouble processing your request. Please try
              again.
            </GamingFailureDescription>
            <GamingRetryButton onClick={this.retryGamingItems}>
              Retry
            </GamingRetryButton>
          </GamingFailureMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  retryGamingItems = () => {
    this.renderGamingItems()
  }

  renderGamingRoute = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.failed:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <GamingMainContainer bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}>
              <Header />
              <GamingSubContainer>
                <SideBar />
                {this.renderGamingRoute()}
              </GamingSubContainer>
            </GamingMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
