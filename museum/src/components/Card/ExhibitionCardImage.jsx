export default function ExhibitionCardImage(props) {
  return (
    <>
      <div className="image-container"><img alt={props.img} src={props.img}></img></div>
    </>
  );
}