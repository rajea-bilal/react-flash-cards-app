import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'


const Form = ({ addCard, selectedCard, editCard }) => {

  
  
  const [ questionInput, setQuestionInput ] = useState(selectedCard ? selectedCard.question : "")
  const [ answerInput, setAnswerInput ] = useState(selectedCard ? selectedCard.answer : "")

 
    useEffect(() => {
    if (selectedCard) {
      setQuestionInput(selectedCard.question);
      setAnswerInput(selectedCard.answer);
    }
  }, [selectedCard]);
  
  function handleForm(event) {
    event.preventDefault()

    if(selectedCard) {
      const updatedCard = {...selectedCard, question: questionInput, answer: answerInput}
      console.log(updatedCard)
        editCard(updatedCard)
    } else {
        const uniqueId =  uuidv4()

        const newCard = { 
          question: questionInput,
          answer: answerInput,
          id: uniqueId
        }

        addCard(newCard)
    }
    setQuestionInput('');
    setAnswerInput('');
   
  }

  return (
      <>
      <div className="formContainer">
        <form className="form" onSubmit={handleForm}>
        <div>
            <label htmlFor="question">Question</label>
            <input 
            type="text"
            placeholder="question"
            id="question"
            className=""
            onChange={(event) => setQuestionInput(event.target.value)}
            value={questionInput}
            />

            <label htmlFor="answer">Answer</label>
            <textarea 
            type="text"
            placeholder="answer"
            id="answer"
            className="textarea"
            rows="4"
            cols="16"
            onChange={(event) => setAnswerInput(event.target.value)}
            value={answerInput}
            />
        </div>

             <button className="btn addQuestionBtn">{selectedCard ? 'Edit Question' : '+ Add question' }</button>

    </form>
      </div>
    
    </>    
  )
}

export default Form
