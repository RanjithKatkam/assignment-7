import {Link} from 'react-router-dom'

import {
  VideoCardMainContainer,
  GamingVideoDetails,
  GamingTitle,
  GamingWatching,
} from './GamingVideoCardStyledComponents'

const GamingVideoCard = props => {
  const {details} = props

  const modifiedDetails = {
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    viewCount: details.view_count,
    id: details.id,
  }

  return (
    <Link className="link" to={`videos/${modifiedDetails.id}`}>
      <VideoCardMainContainer>
        <img
          className="thumbnail-image"
          src={modifiedDetails.thumbnailUrl}
          alt="video thumbnail"
        />
        <GamingVideoDetails>
          <GamingTitle>{modifiedDetails.title}</GamingTitle>
          <GamingWatching>{`${modifiedDetails.viewCount} Watching Worldwide`}</GamingWatching>
        </GamingVideoDetails>
      </VideoCardMainContainer>
    </Link>
  )
}

export default GamingVideoCard
