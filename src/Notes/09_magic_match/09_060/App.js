import { useState } from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';

const cardsImages = [
  {'src' : '/img/helmet-1.png'},
  {'src' : '/img/potion-1.png'},
  {'src' : '/img/ring-1.png'},
  {'src' : '/img/scroll-1.png'},
  {'src' : '/img/shield-1.png'},
  {'src' : '/img/sword-1.png'},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      {/* writing template ui for rendering cards array to dom */}
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard card={card} key={card.id}/>
        ))}
      </div>

      {/* now when clicking new game cards show up and each time their order it different */}

    </div>
  );
}

export default App;
