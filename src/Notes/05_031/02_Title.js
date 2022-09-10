import "./02_Title.css";

// if passed prop to the component it automatically receives a prop object
/*
export default function Title(props) {
  return (
    <div className="container">
      <h1 className="title">{props.title}</h1>
      <br></br>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}
*/

// we can destructure the different properties from the props object directly in the function call
export default function Title({title, subtitle}) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <br></br>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
}

