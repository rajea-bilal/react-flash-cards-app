import React from 'react'
import { useState } from 'react'
import dart from '../assets/dart01.png'
import dartArrow from '../assets/dart02.png'


const flashcardSingle = ({data, findCardToEdit, deleteCard }) => {

 const [ isClicked, setIsClicked ] = useState(false)
// console.log(key)

 function handleClick() {
  //  whenever a click is made it toggles the isClicked 
   setIsClicked(!isClicked)
 }

 function handleEdit() {
    findCardToEdit(data.id)
 }

 function handleDelete() {
   deleteCard(data.id)
 }

  return (
    <article className="flashcardSingle" onClick={handleClick} style={{backgroundColor: isClicked ? 'rgb(233, 205, 227)' : 'seashell'}}>

      <section className="cardText">
        <div className="dartContainer">
          <img src={isClicked ? dartArrow : dart} alt= "" className="dartOnly"/>
        </div>
          <span className="editBtn" onClick={handleEdit}>✏️</span>

        <div className="question">
          <h4>{isClicked ? 'Answer' : 'Question'}</h4>
          <p className="cardInfo">{isClicked ? data.answer : data.question}</p>
        </div>
      </section>

      <span onClick={handleDelete} className="binBtn">🗑️</span>
    </article>
  )
}

export default flashcardSingle
