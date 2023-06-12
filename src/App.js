import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import NxtWatchContext from './NxtWatchContext'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import GamingRoute from './components/GamingRoute'
import TrendingRoute from './components/TrendingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {darkMode: false, savedVideos: [], activeTab: 'Home'}

  onChangeActiveTab = value => {
    this.setState({activeTab: value})
  }

  onToggleDarkMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  onSaveVideoDetails = details => {
    const {savedVideos} = this.state
    const result = savedVideos.find(eachItem => eachItem.id === details.id)

    if (result) {
      this.setState(prev => ({savedVideos: [...prev.savedVideos]}))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, details],
      }))
    }
  }

  onRemoveVideoDetails = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(eachVideo => eachVideo.id !== id)
    this.setState({
      savedVideos: updatedVideos,
    })
  }

  render() {
    const {darkMode, savedVideos, activeTab} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkMode,
          activeTab,
          savedVideos,
          onSaveVideoDetails: this.onSaveVideoDetails,
          onChangeActiveTab: this.onChangeActiveTab,
          onToggleDarkMode: this.onToggleDarkMode,
          onRemoveVideoDetails: this.onRemoveVideoDetails,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
