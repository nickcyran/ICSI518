import { useState, useEffect } from 'react'
import './styles/index.css'
import './styles/base.css'
import './styles/sections.css'
import './styles/form.css'

import ShaderCanvas from './components/ShaderCanvas'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('light')
  const [showShader, setShowShader] = useState(true)
  const [showContent, setShowContent] = useState(true)

  // update theme (light-mode, darkmode) when toggled
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {/* shaderCanvas togglable via navbar */}
      {showShader && <ShaderCanvas />}

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        showShader={showShader}
        setShowShader={setShowShader}
        showContent={showContent}
        setShowContent={setShowContent}
      />

      {/* page-content togglable via navbar */}
      {showContent && (
        <main className="wrap">
          <About />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  )
}

export default App