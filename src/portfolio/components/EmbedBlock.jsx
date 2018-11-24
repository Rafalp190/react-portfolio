import React from 'react'
import Embed from './Embed.jsx'

const l3Title = "CSS Waluigi"
const l3Description = "CSS Waluigi was my first attempt at CSS, \
I chose to create a 16bit Waluigi to reminisce the days where Waluigi was still a character that Nintendo cared about. \
This project was designed on codepen for easy viewing and editing. \
Keep in mind that my knowledge of web development by this point only included the basics of html and CSS. This CSS only drawing takes advantage of the grid capabilities of CSS. \
Click 'Edit on Codepen' to open an editable version of our majestic saltboy Waluigi WAA!"

const EmbedBlock = () => (
  <div className="block">
      <div className="preview wawa">
        <Embed />
      </div>
      <div className="description">
        <div className="description title">{l3Title}</div>
        <div className="description body"> {l3Description}</div>
      </div>
    </div>
)

export default EmbedBlock
