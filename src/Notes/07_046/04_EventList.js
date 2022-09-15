import styles from './04_EventList.module.css'

export default function EventList({events, handleClick}) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>

          {/* adding event location and date in the dom */}
          <p>{event.location} - {event.date}</p>

          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}
