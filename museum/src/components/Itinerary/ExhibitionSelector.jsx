export default function ExhibitionSelector() {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <>
      <select
        name="exhibibitions"
        id="exhibitionSelector"
        onChange={handleChange}
      >
        <option value="">Exhibitions</option>
        <option value="permanentGalleries">Permanent Galleries</option>
        <option value="specialExhibitions">Special Exhibitions</option>
        <option value="digital">Digital</option>
        <option value="allExhibitions">All Exhibitions</option>
      </select>
    </>
  );
}
