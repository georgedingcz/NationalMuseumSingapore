export default function CardImage(props) {
  return (
    <>
      <div className="image-container"><img alt={props.image} src={props.image}></img></div>
    </>
  );
}