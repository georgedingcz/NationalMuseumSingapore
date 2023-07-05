export default function CardAdditionalNotes(props) {
  return (
    <>
      <div className="moreinfo">
        <ul>
          {Object.values(props.additional_notes).map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
