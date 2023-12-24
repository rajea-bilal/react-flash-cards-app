import React from 'react'
import Form from '../components/Form'
import stars from '../assets/stars.png'

const Hero = ({ addCard, selectedCard, editCard }) => {
  return (
      <>

    <section className="hero">
        <div className="hero-left">
            <img src={stars} alt="" className="stars"/>
            <h1>Expand your React knowledge, one flashcard at a time.</h1>
        </div>

        <Form 
        addCard={addCard} 
        editCard={editCard} 
        selectedCard={selectedCard}
        
        />
    </section>
  
    </>
  )
}


export default Hero
