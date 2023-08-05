import {Link} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext'

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
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <Link className="link" to={`videos/${modifiedDetails.id}`}>
            <VideoCardMainContainer
              bgColor={darkMode ? '#1e1e1e' : '#fff'}
              shadow={
                darkMode
                  ? '0px 11px 11px 4px rgba(255, 255, 255, 0.1)'
                  : '10px 16px 11px rgba(0, 0, 0, 0.6)'
              }
            >
              <img
                className="thumbnail-image"
                src={modifiedDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingVideoDetails>
                <GamingTitle color={darkMode ? '#f7fafb' : '#313131'}>
                  {modifiedDetails.title}
                </GamingTitle>
                <GamingWatching
                  color={darkMode ? '#5e6f7a' : '#606060'}
                >{`${modifiedDetails.viewCount} Watching Worldwide`}</GamingWatching>
              </GamingVideoDetails>
            </VideoCardMainContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoCard
