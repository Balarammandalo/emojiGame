// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-list">
      <button className="emoji-button" type="button" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
