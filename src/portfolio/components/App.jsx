import React from 'react'
import EmbedBlock from './EmbedBlock.jsx'
import HtmlPreview from './HtmlPreview.jsx'
import TextBlock from './TextBlock.jsx'
import "../style/portfolioStyle.scss"

const introduction = "Welcome to my Web Portfolio. This is a showcase of my ability as a beginner web developer. The things shown here are the work I did during the 2018 Web Development \
 Course at Universidad del Valle de Guatemala. The applications serve the purpose of demonstrating my abilities in specific subject matters of importance for successful web development. \
 granting me the knowledge necesary to join an ongoing development team such as yours."

const l1body = "My introduction to web development was done with a throwback to thee days of text web adventure games \
I was tasked with the mission of creating a story using only HTML elements. This gave me a deeper understanding of HTML \
tags, routing, pure image loading and many other basic skills. This lab showcases the groundwork that I built upon to create \
more complex projects like the ones showcased in this portfolio. "
const l4body = "Next thing you know we are working with JavaScript. And things started getting a bit more complicated. \
This application showcases a basic chat using fetch. This also introduced us to the concept of the DOM and how to modify it. \
It connects to a remote server where all the classmates can chat with\
each other. I decided to attempt to make a bootleg version of Whatsapp, and it sort of worked. At this Point my CSS skills \
were still limited but rapidly improving. "
const l5body = "And then there was Node!... I began undestanding the underlying \
complications that come with JavaScript actions for web development, and realized the \
need for a working intermediary to sort them all out. This project is a rehash of the fetch chat. \
However, it utilizes technologies from Node to host a server and communicate to it via sockets from a client.\
 Chatting with my classmates has never been easier. If you are lonely you can use both chats here and pretend someone loves you."
const interlude = "Well... We can't go anywhere but up. Understanding node opened the floodgates to 2018 web \
development. From here on out we focused on React and proper web development paradigms."
const rbpbody = "Projects have to start somewhere. What better way of understanding the \
webpack and node configurations necesary to start a new project than by creating an app to quickstart all \
of my future projects. The react-boilerplate builds up the groundwork for any project fitting of 2018. Smart and Lazy works hard once and uses it forever.\
 Note: The example app is trash, it is an ugly placeholder, not a beauty pageant."
const l6body = "Memory Game showcases a basic React App as well as eslint, babelrc and webpack configurations. \
this is it boys. Look's like meat is back on the menu. Making this last lab tested my understanding of \
the topics seen in class but also my creativity and wit. Some problems I would have not solved without help \
and some others had to be solved cleverly."
const acknowledgments = "I would like to thank my professor Dennis for his willingness to help and his ability to make a \
 subject I had no interest in, into one of my favorite classes of the semester. "

const outtro = "Thank you for taking the time and scrolling through my portfolio. This might not be the best web development out there \
but this portfolio showcases a will to learn and to solve problems that is invaluable in development teams. \
Hope you have enjoyed your stay.  - Rafael León, 2018"

const App = () => (
  <div className="app">
    <div className="app h1">Rafalp190's Web Portfolio</div>
    <TextBlock title={"Introduction"} text={introduction} />
    <HtmlPreview title="Treasure Plan[E]t: A text adventure"
      body={l1body}
      url="http://34.210.35.174/13361/treasureplant/index.html"
      git=""
    />
    <EmbedBlock />
    <HtmlPreview title="Fetch that Whatsapp Chat"
      body={l4body}
      url="http://34.210.35.174/13361/chat.html"
      git=""
    />
    <HtmlPreview title="Socket and Servers make better chats"
      body={l5body}
      url="http://34.210.35.174:15989/"
      git="https://github.com/Rafalp190/L5_Nodejs"
    />
    <TextBlock title={"Where do we go from here?"} text={interlude} />
    <HtmlPreview title="react-boilerplate"
      body={rbpbody}
      url="http://34.210.35.174/13361/react-boilerplate/dist/index.html"
      git="https://github.com/Rafalp190/react-boilerplate"
    />
    <HtmlPreview title="This is as far as I go..."
      body={l6body}
      url="http://34.210.35.174/13361/memory_game/dist/index.html"
      git="https://github.com/Rafalp190/memory_game_lab6"
    />
    <TextBlock title={"Acknowledgments"} text={acknowledgments} />
    <TextBlock title={"Goodbye"} text={outtro} />
    <img  className="ground" src={require('../images/ground.png')} ></img>
  </div>
)

export default App
