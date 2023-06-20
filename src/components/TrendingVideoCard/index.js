import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  TrendingVideoCardMainContainer,
  TrendingVideoDetails,
  TrendingTitle,
  TrendingChannelName,
} from './TrendingVideoCardStyledComponent'

import './index.css'

const TrendingVideoCard = props => {
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
      <TrendingVideoCardMainContainer>
        <img
          className="trending-thumbnail-image"
          src={modifiedDetails.thumbnailUrl}
          alt="video thumbnail"
        />
        <TrendingVideoDetails>
          <TrendingTitle>{modifiedDetails.title}</TrendingTitle>
          <TrendingChannelName>
            {modifiedDetails.channelName}
          </TrendingChannelName>
          <div className="publish-div">
            <TrendingChannelName>{`${modifiedDetails.viewCount} •`}</TrendingChannelName>
            <TrendingChannelName>
              {modifiedDetails.publishedAt}
            </TrendingChannelName>
          </div>
        </TrendingVideoDetails>
      </TrendingVideoCardMainContainer>
    </Link>
  )
}

export default TrendingVideoCard
