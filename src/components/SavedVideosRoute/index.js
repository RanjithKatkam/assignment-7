import {Component} from 'react'
import {AiFillSave} from 'react-icons/ai'

import NxtWatchContext from '../../NxtWatchContext'

import {
  SavedMainContainer,
  SavedSubContainer,
  VideoItemContainer,
  EmptyViewContainer,
  NoSavedHeading,
  NoSavedPara,
  SavedVideosHeading,
} from './SavedVideosStyledComponents'
import TrendingVideoCard from '../TrendingVideoCard'

import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

class SavedVideosRoute extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedVideos, darkMode} = value
          console.log(savedVideos)

          return (
            <SavedMainContainer
              bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}
              data-testid="savedVideos"
            >
              <Header />
              <SavedSubContainer>
                <SideBar />
                <div className="content-container">
                  {savedVideos.length > 0 ? (
                    <>
                      <div
                        className={
                          darkMode ? 'container-darkMode' : 'container'
                        }
                      >
                        <div className="logo-container">
                          <AiFillSave className="trending-icon" />
                        </div>
                        <SavedVideosHeading
                          color={darkMode ? '#f0f8fa' : '#000000'}
                        >
                          Saved Videos
                        </SavedVideosHeading>
                      </div>
                      <VideoItemContainer
                        bgColor={darkMode ? '#0f0f0f' : '#f9f9f9'}
                      >
                        {savedVideos.map(eachItem => (
                          <TrendingVideoCard
                            direction="row"
                            details={eachItem}
                            key={eachItem.id}
                          />
                        ))}
                      </VideoItemContainer>
                    </>
                  ) : (
                    <EmptyViewContainer>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                        className="no-saved-videos"
                      />
                      <NoSavedHeading color={darkMode ? '#f8fbfd' : '#1c293a'}>
                        No saved videos found
                      </NoSavedHeading>
                      <NoSavedPara color={darkMode ? '#cfedf7' : '#666885'}>
                        You can save your videos while watching them.
                      </NoSavedPara>
                    </EmptyViewContainer>
                  )}
                </div>
              </SavedSubContainer>
            </SavedMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosRoute
