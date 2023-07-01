export default function CardMoreInfo(props) {
  return (
    <>
      <div className="moreinfo">
        <ul>
          {props.info.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
