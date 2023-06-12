import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: false,
  activeTab: '',
  savedVideos: [],
  onSaveVideoDetails: () => {},
  onChangeActiveTab: () => {},
  onToggleDarkMode: () => {},
  onRemoveVideoDetails: () => {},
})

export default NxtWatchContext
