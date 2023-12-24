import React from 'react'
import FlashcardSingle from './FlashcardSingle'
import { v4 as uuidv4 } from 'uuid'

const flashcards = ({questionsBank,findCardToEdit, deleteCard }) => {



  return (
    <section className="flashcardsContainer">
        {questionsBank.map(object => {
            
            return <FlashcardSingle data={object} key={object.id} findCardToEdit={findCardToEdit} deleteCard={deleteCard} />
        })}
    </section>
  )
}

export default flashcards
