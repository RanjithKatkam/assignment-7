import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import {RiPlayListAddFill} from 'react-icons/ri'
import {
  AiOutlineLike,
  AiOutlineDislike,
  //   AiFillDislike,
  //   AiFillLike,
} from 'react-icons/ai'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import NxtWatchContext from '../../NxtWatchContext'

import {
  VideoDetailsMainContainer,
  VideoDetailsSubContainer,
  VideoDetailsFailureDescription,
  VideoDetailsFailureHeading,
  VideoDetailsRetryButton,
  VideoDetailsFailureMainContainer,
  DetailsMainContainer,
  VideoTitle,
  ViewAndData,
  ChannelDetails,
  ChannelName,
  Subs,
  Description,
  Like,
  Save,
  Dislike,
} from './VideoItemDetailsStyledComponent'

import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failed: 'FAILED',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetails: '',
    responseVideoDetails: '',
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.renderVideoDetails()
  }

  renderVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `BEARER ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const responseData = await response.json()
      const updatedData = {
        title: responseData.video_details.title,
        description: responseData.video_details.description,
        videoUrl: responseData.video_details.video_url,
        viewCount: responseData.video_details.view_count,
        thumbnailUrl: responseData.video_details.thumbnail_url,
        channelName: responseData.video_details.channel.name,
        profileImg: responseData.video_details.channel.profile_image_url,
        subs: responseData.video_details.channel.subscriber_count,
        publishedAt: responseData.video_details.published_at,
        id: responseData.video_details.id,
      }
      this.setState({
        videoDetails: updatedData,
        responseVideoDetails: responseData.video_details,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failed})
    }
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          videoDetails,
          responseVideoDetails,
          isLiked,
          isSaved,
          isDisliked,
        } = this.state
        const {
          videoUrl,
          profileImg,
          title,
          description,
          subs,
          viewCount,
          channelName,
          publishedAt,
          id,
          saved,
        } = videoDetails

        const publishedDate = formatDistanceToNow(new Date(publishedAt))
          .replace(/^about /i, '')
          .replace(/^over /i, '')
          .replace(/^almost /i, '')

        const {onSaveVideoDetails, onRemoveVideoDetails} = value

        const addOrRemoveVideo = () => {
          if (isSaved === true) {
            onRemoveVideoDetails(id)
          } else {
            onSaveVideoDetails({...responseVideoDetails, saved: true})
          }
        }

        const onClickSaveButton = () => {
          this.setState(
            prevState => ({
              isSaved: !prevState.isSaved,
            }),
            addOrRemoveVideo,
          )
        }

        return (
          <DetailsMainContainer>
            <div>
              <ReactPlayer
                width="100%"
                height="550px"
                url={videoUrl}
                controls
              />
            </div>
            <VideoTitle>{title}</VideoTitle>
            <div className="views-date">
              <div className="publish-divs">
                <ViewAndData>{`${viewCount} • `}</ViewAndData>
                <ViewAndData>{publishedAt}</ViewAndData>
              </div>
              <div className="buttons-container">
                <button
                  onClick={this.onClickLikeButton}
                  className="button"
                  type="button"
                >
                  <AiOutlineLike
                    color={isLiked ? '#2563eb' : '#64748b'}
                    size={25}
                  />

                  <Like color={isLiked ? '#2563eb' : '#64748b'}>Like</Like>
                </button>
                <button
                  onClick={this.onClickDislikeButton}
                  className="button"
                  type="button"
                >
                  <AiOutlineDislike
                    color={isDisliked ? '#2563eb' : '#64748b'}
                    size={25}
                  />

                  <Dislike color={isDisliked ? '#2563eb' : '#64748b'}>
                    Dislike
                  </Dislike>
                </button>
                <button
                  onClick={onClickSaveButton}
                  className="button"
                  type="button"
                >
                  <RiPlayListAddFill
                    color={saved ? '#4f46e5' : '#181818'}
                    size={25}
                  />
                  {isSaved ? (
                    <Save color="darkblue">Saved</Save>
                  ) : (
                    <Save color="black">Save</Save>
                  )}
                </button>
              </div>
            </div>
            <hr />
            <ChannelDetails>
              <div>
                <img
                  className="channel-logo"
                  src={profileImg}
                  alt="channel logo"
                />
              </div>
              <div>
                <ChannelName>{channelName}</ChannelName>
                <Subs>{`${subs} subscribers`}</Subs>
                <Description>{description}</Description>
              </div>
            </ChannelDetails>
          </DetailsMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

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
          <VideoDetailsFailureMainContainer>
            <img
              src={themeImage}
              alt="failure view"
              className="product-failure-image"
            />
            <VideoDetailsFailureHeading>
              Oops! Something Went Wrong
            </VideoDetailsFailureHeading>
            <VideoDetailsFailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </VideoDetailsFailureDescription>
            <VideoDetailsRetryButton onClick={this.retryVideoDetails}>
              Retry
            </VideoDetailsRetryButton>
          </VideoDetailsFailureMainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  retryVideoDetails = () => {
    this.renderVideoDetails()
  }

  renderVideoDetailsItem = () => {
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
            <VideoDetailsMainContainer
              bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailsSubContainer>
                <SideBar />
                {this.renderVideoDetailsItem()}
              </VideoDetailsSubContainer>
            </VideoDetailsMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
