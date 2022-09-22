import "./SingleCard.css";

function SingleCard({ card, handleChoice }) {
  // when user clicks on the card then the choiceone or choicetwo state in app.js should update.
  // for that writing a function in app.js handlechoice

  // now pass the prop of handlechoice to handleclick

  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
