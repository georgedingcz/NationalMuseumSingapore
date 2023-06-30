export default function DurationOfVisit() {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <>
      <select name="duration" id="duration" onChange={handleChange}>
        <option value="">Duration of visit</option>
        <option value="2hours">2 hours</option>
        <option value="3hours">3 hours</option>
        <option value="5hours">5 hours</option>
        <option value="fullDay">Full Day</option>
      </select>
    </>
  );
}
