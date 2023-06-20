import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../NxtWatchContext'

import {
  TrendingMainContainer,
  TrendingSubContainer,
  VideoItemContainer,
  TrendingFailureMainContainer,
  TrendingFailureHeading,
  TrendingFailureDescription,
  TrendingRetryButton,
  TrendingHeading,
} from './TrendingRouteStyledComponents'
import TrendingVideoCard from '../TrendingVideoCard'

import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failed: 'FAILED',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class TrendingRoute extends Component {
  state = {videoList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.renderTrendingVideos()
  }

  renderTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const responseData = await response.json()
      console.log(responseData.videos)
      this.setState({
        videoList: responseData.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failed,
      })
    }
  }

  renderSuccessView = () => {
    const {videoList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <div className="content-container">
              <div className="container">
                <div className="logo-container">
                  <AiFillFire className="trending-icon" />
                </div>
                <TrendingHeading>Trending</TrendingHeading>
              </div>
              <VideoItemContainer bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}>
                {videoList.map(eachItem => (
                  <TrendingVideoCard
                    direction="row"
                    details={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </VideoItemContainer>
            </div>
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
          <TrendingFailureMainContainer>
            <img
              src={themeImage}
              alt="failure view"
              className="product-failure-image"
            />
            <TrendingFailureHeading>
              Oops! Something Went Wrong
            </TrendingFailureHeading>
            <TrendingFailureDescription>
              We are having some trouble processing your request. Please try
              again.
            </TrendingFailureDescription>
            <TrendingRetryButton onClick={this.retryTrendingItems}>
              Retry
            </TrendingRetryButton>
          </TrendingFailureMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  retryTrendingItems = () => {
    this.renderTrendingVideos()
  }

  renderTrendingRoute = () => {
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
            <TrendingMainContainer
              data-testid="trending"
              bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}
            >
              <Header />
              <TrendingSubContainer>
                <SideBar />
                {this.renderTrendingRoute()}
              </TrendingSubContainer>
            </TrendingMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingRoute
