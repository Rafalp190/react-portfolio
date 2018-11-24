import React from 'react'
import { render } from 'react-dom'
import App from './portfolio/components/App.jsx'



const Root = document.createElement('div', {id: 'root'})
document.body.appendChild(Root)

render(
<App />,
Root
)
