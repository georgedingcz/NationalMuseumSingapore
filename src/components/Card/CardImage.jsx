export default function CardImage(props) {
  return (
    <>
      <div className="image-container"><img alt={props.img} src={props.img}></img></div>
    </>
  );
}