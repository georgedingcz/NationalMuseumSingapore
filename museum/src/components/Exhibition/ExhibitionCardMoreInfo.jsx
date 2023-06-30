export default function ExhibitionCardMoreInfo(props) {
  return (
    <>
      <div className="exhibition-moreinfo">
          <ul>
            {props.info.map((info) => (
              <li>{info}</li>
            ))}
          </ul>
      </div>
    </>
  );
}

