import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

// if two images match then they stay displayed and if does not match then immediately gets hidden again as we are resetting their state to null immediately. can give a settimeout to the reset function for some time to be able to view the second card that it does not match

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
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
