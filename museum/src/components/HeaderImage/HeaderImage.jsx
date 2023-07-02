import "./headerImage.css";

export default function HeaderImage(props) {
  return (
    <img className="header-image" src={props.src} alt="exhibitions-header" />
  );
}
