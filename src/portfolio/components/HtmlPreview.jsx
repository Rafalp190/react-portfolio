import React from 'react'

const HtmlPreview = ({url, title, body, git}) => (
  <div className="block">
      <iframe className="preview" src={url} />
      <div className="description">
      <div className="description title">{title}</div>
      < div className="description body"> {body}</div>
      <a href={url} className="description body">Visit the project...</a>
      
      <a href={git} className="description body">{git === ""? "": "Github..."}</a>
      </div>
    </div>
)

export default HtmlPreview