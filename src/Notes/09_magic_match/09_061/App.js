import { useState } from "react";
import "./App.css";
import SingleCard from "./Components/SingleCard";

const cardsImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // when user clicks on two cards, then have to compare and match
  // when user clicks on first card then update the state of that card, same when clicks on second card then update its state also
  // then compare to see if they match
  // so adding click event on back image of singlecard comp
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  // pass this function in below ui template as a prop
  // now logic in the function is to update choice one or choice two depending upon the selection. if the choice one has a value then it is selected and if it does not then it is yet to be selected.
  // if it does not have a value then we update choice one and if it has a value then we update choice two
  const handleChoice = (card) => {
    // can log to see if the card element is identified properly
    // console.log(card)

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      {/* writing template ui for rendering cards array to dom */}
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>

      {/* now when clicking new game cards show up and each time their order it different */}
    </div>
  );
}

export default App;
