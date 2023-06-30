export default function DateOfVisit() {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <>
      <div>
        Date of visit:
        <input
          type="date"
          id="start"
          name="date-of-visit"
          value="2023-07-01"
          min="2023-07-01"
          max="2023-12-31"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
