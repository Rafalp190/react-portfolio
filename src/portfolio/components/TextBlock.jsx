import React from 'react'

const TextBlock = ({ title, text }) => (
  <div className="app p">
    <div className="app subtitle">
      {title}
    </div>
    <div className="app subtext">
      {text}
    </div>
  </div>
)

export default TextBlock
