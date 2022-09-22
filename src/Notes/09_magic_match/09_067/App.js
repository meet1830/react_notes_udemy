// when user clickes two cards, then he is also be able to select other cards at the same time hence everything flipping at once. ideally we want to disable the flip of the cards after two of them are selected for a second.
// want to undisable them after either they are matched or gets flipped back 

import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./Components/SingleCard";

const cardsImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // creating disabled state 
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    // until we are done comparing and flipping the cards, we set the cards to be disabled
    // setDisabled(true);
    // dont call it here or else all the cards will be disabled from clicking as the state runs once while rendering
    // call it in the first if condition so that the other cards are disabled after we have selected two cards

    if (choiceOne && choiceTwo) {

      setDisabled(true);
      
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);

    // after we done comparing and in resetting we want to make them normal again
    setDisabled(false);
  };

  // passing a disabled prop
  // if a card has a disabled prop set to true then inside the card component we wont allow it to be clicked
  // passing the disabled state in this

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
