import { useState } from "react";
import "./App.css";

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

  // to count number of turns used to complete the game
  const [turns, setTurns] = useState(0);

  // create 12 cards of 6 to duplicate them. then randomize the order of cards using the sort method. then give each of them a random id, we will use that key to output it in grid/list
  // sort -> if return less than zero the order stays the same, if greater then swapped.
  // random number - 0.5 can be pos or neg. hence can swap items or will not swap items hence sort not random order
  // adding on id property for each item with map. returning an object for each case, with new property of id
  // so shuffledcards will be array with both src and id properties
  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    // creating a state to store shuffled cards
    setCards(shuffledCards);

    // calling it here so every time click on new game then the cards are shuffled and turns are set to 0
    setTurns(0);
  };
  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
