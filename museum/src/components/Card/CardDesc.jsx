export default function CardDesc(props) {
  return (
    <>
      <div className="description"><p>{props.content.description.length >= 300 ? props.content.description.substr(0, 300) + "..." : props.content.description}</p></div>
    </>
  );
}