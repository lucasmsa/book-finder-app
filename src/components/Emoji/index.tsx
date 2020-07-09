import React from 'react'

interface EmojiProps {
  label: string;
  symbol: string;
}

const Emoji = (props: EmojiProps) => (
  <option
    style={{ padding: 0, maxWidth: '20px'}}
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    value={props.label}
  >
    {props.symbol}
  </option>
)

export default Emoji;