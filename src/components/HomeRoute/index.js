import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import NxtWatchContext from '../../NxtWatchContext'
import {
  MainContainer,
  PopupContainer,
  HomeRouteMainContainer,
  VideosContainer,
  Input,
  InputContainer,
  ItemContainer,
  FailureMainContainer,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoVideosHeading,
  NoVideosPara,
  EmptySearchViewContainer,
} from './HomeRouteStyledComponent'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failed: 'FAILED',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class HomeRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    displayPopup: true,
    searchInput: '',
    searchValue: '',
  }

  componentDidMount() {
    this.renderItems()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.renderItems)
  }

  onEnterKeyDown = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.renderItems)
    }
  }

  renderItems = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchValue} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${jwtToken} `,
      },
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData.videos)

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: responseData.videos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failed})
    }
  }

  closePopup = () => {
    this.setState({displayPopup: false}, this.renderSuccessView)
  }

  renderSuccessView = () => {
    const {videosList, displayPopup, searchInput} = this.state

    return (
      <HomeRouteMainContainer>
        <PopupContainer data-testid="banner" display={displayPopup}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
              className="popup-logo"
            />
            <p className="para">Buy Nxt Watch Premium prepaid plans with UPI</p>
            <button className="get-it-now" type="button">
              GET IT NOW
            </button>
          </div>
          <button type="button" onClick={this.closePopup} data-testid="close">
            <AiOutlineClose className="cross" size={25} />
          </button>
        </PopupContainer>
        <VideosContainer>
          <InputContainer>
            <Input
              onChange={this.onChangeSearchInput}
              onKeyDown={this.onEnterKeyDown}
              value={searchInput}
              placeholder="Search"
              type="search"
            />
            <button
              onClick={this.onClickSearchButton}
              className="search-button"
              type="button"
              data-testid="searchButton"
            >
              <AiOutlineSearch size={22} className="search-icon" />
            </button>
          </InputContainer>
          <ItemContainer>
            {videosList.length > 0 ? (
              videosList.map(eachItem => (
                <VideoCard
                  direction="column"
                  details={eachItem}
                  key={eachItem.id}
                />
              ))
            ) : (
              <EmptySearchViewContainer>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                  className="no-saved-videos"
                />
                <NoVideosHeading>No search results found</NoVideosHeading>
                <NoVideosPara>
                  Try different key words or remove search filter.
                </NoVideosPara>
                <RetryButton onClick={this.retryItems}>Retry</RetryButton>
              </EmptySearchViewContainer>
            )}
          </ItemContainer>
        </VideosContainer>
      </HomeRouteMainContainer>
    )
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value
        const themeImage = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png'
        return (
          <FailureMainContainer>
            <img
              src={themeImage}
              alt="failure view"
              className="products-failure-img"
            />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
              We are having some trouble processing your request. Please try
              again.
            </FailureDescription>
            <RetryButton onClick={this.retryItems}>Retry</RetryButton>
          </FailureMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  retryItems = () => {
    this.renderItems()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderHomeRoute = () => {
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
            <MainContainer
              data-testid="home"
              bgColor={darkMode ? '#181818' : '#ebebeb'}
            >
              <Header />
              <div className="home-div">
                <SideBar />
                {this.renderHomeRoute()}
              </div>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
