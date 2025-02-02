import Card from "../../../components/card";
import laptopicon from "../../../assets/laptop.png";

function CardGrid() {
  // Mock data array
  const cardData = [
    {
      name: "john Doe",
      date: "Feb 02, 2025.1 source",
      imageSrc: laptopicon,
    },
    {
      name: "John Doe",
      date: "Jan 15, 2025.2 source",
      imageSrc: laptopicon,
    },
    {
      name: "Jane Smith",
      date: "Dec 10, 2024.3 source",
      imageSrc: laptopicon,
    },
    {
      name: "Alice Johnson",
      date: "Mar 05, 2025.4 source",
      imageSrc: laptopicon,
    },
    {
      name: "John Doe",
      date: "Jan 15, 2025.2 source",
      imageSrc: laptopicon,
    },
    {
      name: "Jane Smith",
      date: "Dec 10, 2024.3 source",
      imageSrc: laptopicon,
    },
    {
      name: "Alice Johnson",
      date: "Mar 05, 2025.4 source",
      imageSrc: laptopicon,
    },
    {
      name: "John Doe",
      date: "Jan 15, 2025.2 source",
      imageSrc: laptopicon,
    },
    {
      name: "Jane Smith",
      date: "Dec 10, 2024.3 source",
      imageSrc: laptopicon,
    },
    {
      name: "Alice Johnson",
      date: "Mar 05, 2025.4 source",
      imageSrc: laptopicon,
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Responsive columns
        gap: "5%",
        padding: "20px",
        width: "90%",
        boxSizing: "border-box",
        gridAutoRows: "minmax(200px, auto)", // Ensures that rows adapt in height
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          date={card.date}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
}

export default CardGrid;
