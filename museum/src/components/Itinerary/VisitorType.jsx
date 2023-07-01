export default function VisitorType() {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <>
      <select name="visitorType" id="visitorType" onChange={handleChange}>
        <option value="">For All</option>
        <option value="adults">Adults</option>
        <option value="children">Children</option>
        <option value="families">Families</option>
        <option value="seniors">Seniors</option>
        <option value="specialNeeds">Special Needs</option>
        <option value="students">Students</option>
      </select>
    </>
  );
}
