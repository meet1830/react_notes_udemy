// importing a css module
// can call styles anything but convention 
// how to apply - dynamic -> styles.className - applying classname to the element
// if applied same classname here card to other component then will not apply to them 
// how is it scoped to the component -> in inspect elements the classname is the name of the css file_className_randomNumber and hence it is unique to that elements on which it is applied to. if applied card to other components then will not work due to this
// Note -> styles are only scoped for class and id selectors. if in .module.css file used some element selector then will result in global implementation. the way around is to scope that applying parent class in front of it -> {.card button}

import styles from './04_EventList.module.css'

export default function EventList({events, handleClick}) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>

          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}
