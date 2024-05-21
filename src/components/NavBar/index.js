// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <div className="navbar-container">
      <div className="emoji-images">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emojiImg"
        />
        <h1 className="emojiHead">Emoji Games</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score-para">Score: {currentScore}</p>
          <p className="score-para">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
