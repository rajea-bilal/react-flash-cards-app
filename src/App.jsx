import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Flashcards from './components/Flashcards'
import flashcardSingle from './components/FlashcardSingle'
import bank from './assets/bank.json'
import future from './assets/future.png'



function App() {
  const [questions, setQuestions] = useState(bank)
  const [selectedCard, setSelectedCard] = useState(false)


  
// delete card functionality
function deleteCard(id) {
  const updatedStateArray = questions.filter(card => card.id !== id)
  setQuestions(updatedStateArray);
}
  // add card functionality
  function addCard(newCard) {
    // console.log(newCard)
    // copying the state array and then adding a new card to it
    setQuestions(() => [...questions, newCard])
  }

  function findCardToEdit(id) {
     const card = questions.find(question => question.id == id)
    //  console.log(card)
    setSelectedCard(card)
  }

  function editCard(editedCard) {
    // const updatedStateArray =questions.map(card => { card.id === editedCard.id ? {...card, ...editedCard} : card } )
    const updatedStateArray = questions.map(card => {
      // if the card's id matches the id of the edited card, then copy the previous card properties - by spreading them - and update them with editedcard properties
      if(card.id === editedCard.id) {
        return {...card, ...editedCard}
      } else {
        // if the ids dont match then return the original card as it is
        return {...card}
      }
    })
    console.log(updatedStateArray)
    setQuestions(updatedStateArray)
    setSelectedCard(false)
  }

  return (
    <>
        <img src={future} alt="future" className="future"/>
      <div className="container">
        <Header />
        <Hero 
        addCard={addCard} 
        selectedCard={selectedCard}
        editCard={editCard}
        />
        <Flashcards 
        questionsBank = {questions} 
        findCardToEdit={findCardToEdit} 
        deleteCard = {deleteCard}
        />
      </div>
    </>
  )
}


export default App
