import Card from "../Card/Card";

export default function Tour() {
  const card = {
    image: "https://picsum.photos/200",
    date: "2023-07-01",
    title: "Tour Title",
    content: {
      description: "This is the content of the card.",
    },
    additional_notes: "Additional notes for the card.",
  };

  return (
    <div className="section-container">
      <p>This is the tour component</p>
      <Card card={card} />
    </div>
  );
}
