export default function ExhibitionCardMoreInfo(props) {
  return (
    <>
      <div className="exhibition-moreinfo">
          <ul>
            {props.info.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
      </div>
    </>
  );
}

