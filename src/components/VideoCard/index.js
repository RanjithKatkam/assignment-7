import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

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

  //   const publishedDate = formatDistanceToNow(
  //     new Date(modifiedDetails.publishedAt),
  //   )
  //     .replace(/^about /i, '')
  //     .replace(/^over /i, '')
  //     .replace(/^almost /i, '')

  return (
    <Link className="link" to={`videos/${modifiedDetails.id}`}>
      <VideoCardMainContainer>
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
            <Title>{modifiedDetails.title}</Title>
            <ChannelName>{modifiedDetails.channelName}</ChannelName>
            <div className="publish-div">
              <ChannelName>{`${modifiedDetails.viewCount} •`}</ChannelName>
              <ChannelName>{modifiedDetails.publishedAt}</ChannelName>
            </div>
          </div>
        </VideoDetails>
      </VideoCardMainContainer>
    </Link>
  )
}

export default VideoCard
