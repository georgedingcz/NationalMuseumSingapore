export default function CardAdditionalNotes(props) {
  return (
    <>
      <div className="moreinfo">
        <ul>
          {Object.values(props.additional_notes).map((info) => (
            <li>{info}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
