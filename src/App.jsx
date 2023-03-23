import Ball from './components/Ball'
import './App.css'
import css from './assets/tech/css.png'
import docker from './assets/tech/docker.png'
import figma from './assets/tech/figma.png'
import git from './assets/tech/git.png'
import html from './assets/tech/html.png'


function App() {

  return (
    <div className='container'>
      <h1>Technologies</h1>
      <div className="img-container">
        <Ball icon={css} />
        <Ball icon={docker} />
        <Ball icon={figma} />
        <Ball icon={git} />
        <Ball icon={html} />
      </div>
    </div>
  )
}

export default App
