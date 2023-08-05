import NxtWatchContext from '../../NxtWatchContext'
import {
  NotFoundMainContainer,
  FailuresContainer,
  NotFoundImage,
} from './NotFoundStyledComponents'
import './index.css'

const NotFoundRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkMode} = value
      const themeImage = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundMainContainer>
          <FailuresContainer>
            <NotFoundImage src={themeImage} alt="not found" />
            <h1 className="not-found-heading">Page Not Found</h1>
            <p className="not-found-para">
              We are sorry, the page you requested could not be found.
            </p>
          </FailuresContainer>
        </NotFoundMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFoundRoute
