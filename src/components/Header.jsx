import React from 'react'
import reactLogo from '../assets/react.svg'

const Header = () => {
  return (
    <header className="header">
        <div className="appLogo">
            <img src ={reactLogo} alt="" />
        </div>

        <div className="appTitle">
            <p>React</p>
            <p>Flashcards</p>
        </div>
    </header>
  )
}
export default Header
