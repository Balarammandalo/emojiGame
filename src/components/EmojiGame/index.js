/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {clickEmojis: [], isGameInProgress: true, topScore: 0}

  getEmojiShuffle = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getFinishGameAndTopScore = curntScure => {
    const {topScore} = this.state
    let newScore = topScore
    if (curntScure > newScore) {
      newScore = curntScure
    }
    this.setState({topScore: newScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojis} = this.state
    const isPresent = clickEmojis.includes(id)
    const emojiLength = clickEmojis.length

    if (isPresent) {
      this.getFinishGameAndTopScore(emojiLength)
    } else {
      if (emojisList.length - 1 === emojiLength) {
        this.getFinishGameAndTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojis: [...prevState.clickEmojis, id],
      }))
    }
  }

  renderEmojis = () => {
    const shuffledEmoji = this.getEmojiShuffle()
    return (
      <ul className="emoji-cards">
        {shuffledEmoji.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({clickEmojis: [], isGameInProgress: true, topScore: 0})
  }

  renderScore = () => {
    const {emojisList} = this.props
    const {clickEmojis} = this.state
    const isWin = emojisList.length === clickEmojis.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        onClickPlayAgain={this.playAgain}
        score={clickEmojis.length}
      />
    )
  }

  render() {
    const {clickEmojis, isGameInProgress, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickEmojis.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-container">
          {isGameInProgress ? this.renderEmojis() : this.renderScore()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
