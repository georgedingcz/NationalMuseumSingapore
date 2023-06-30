export default function CardMoreInfo(props) {
  return (
    <>
      <div className="moreinfo">
          <ul>
            {props.info.map((info) => (
              <li>{info}</li>
            ))}
          </ul>
      </div>
    </>
  );
}

