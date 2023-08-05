import {Link} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext'

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

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <Link className="link" to={`videos/${modifiedDetails.id}`}>
            <TrendingVideoCardMainContainer
              bgColor={darkMode ? '#1e1e1e' : '#fff'}
              shadow={
                darkMode
                  ? '0px 11px 11px 4px rgba(255, 255, 255, 0.1)'
                  : '10px 16px 11px rgba(0, 0, 0, 0.6)'
              }
            >
              <img
                className="trending-thumbnail-image"
                src={modifiedDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingTitle color={darkMode ? '#f7fafb' : '#313131'}>
                  {modifiedDetails.title}
                </TrendingTitle>
                <TrendingChannelName color={darkMode ? '#5e6f7a' : '#606060'}>
                  {modifiedDetails.channelName}
                </TrendingChannelName>
                <div className="publish-div">
                  <TrendingChannelName
                    color={darkMode ? '#5e6f7a' : '#606060'}
                  >{`${modifiedDetails.viewCount} •`}</TrendingChannelName>
                  <TrendingChannelName color={darkMode ? '#5e6f7a' : '#606060'}>
                    {modifiedDetails.publishedAt}
                  </TrendingChannelName>
                </div>
              </TrendingVideoDetails>
            </TrendingVideoCardMainContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoCard
