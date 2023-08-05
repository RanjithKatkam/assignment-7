import {Link} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext'

import {
  VideoCardMainContainer,
  VideoDetails,
  Title,
  ChannelName,
} from './VideoCardStyledComponent'
import './index.css'

const VideoCard = props => {
  const {details} = props

  const modifiedDetails = {
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    viewCount: details.view_count,
    publishedAt: details.published_at,
    profileImageUrl: details.channel.profile_image_url,
    channelName: details.channel.name,
    id: details.id,
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <Link className="link" to={`videos/${modifiedDetails.id}`}>
            <VideoCardMainContainer
              shadow={
                darkMode
                  ? '10px 6px 9px 0px rgba(255, 255, 255, 0.1)'
                  : '10px 6px 9px rgba(0, 0, 0, 0.6)'
              }
            >
              <img
                className="thumbnail-image"
                src={modifiedDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoDetails>
                <div className="channel-profile-container">
                  <img
                    className="channel-logos"
                    src={modifiedDetails.profileImageUrl}
                    alt="channel logo"
                  />
                </div>
                <div>
                  <Title color={darkMode ? '#f8fafc' : '#313131'}>
                    {modifiedDetails.title}
                  </Title>
                  <ChannelName color={darkMode ? '#909090' : ' #606060'}>
                    {modifiedDetails.channelName}
                  </ChannelName>
                  <div className="publish-div">
                    <ChannelName
                      color={darkMode ? '#909090' : ' #606060'}
                    >{`${modifiedDetails.viewCount} •`}</ChannelName>
                    <ChannelName color={darkMode ? '#909090' : ' #606060'}>
                      {modifiedDetails.publishedAt}
                    </ChannelName>
                  </div>
                </div>
              </VideoDetails>
            </VideoCardMainContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
