import "./02_Title.css";

export default function Title({title, subtitle}) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <br></br>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
}

