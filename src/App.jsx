import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import css from './assets/tech/css.png'
import docker from './assets/tech/docker.png'
import figma from './assets/tech/figma.png'
import git from './assets/tech/git.png'
import html from './assets/tech/html.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Technologies</h1>
      <div className="img-container">
        <img src={css} alt="css" />
        <img src={docker} alt="css" />
        <img src={figma} alt="css" />
        <img src={git} alt="css" />
        <img src={html} alt="css" />
      </div>
    </div>
  )
}

export default App
