import Card from "react-bootstrap/Card";

function BuzinessCard({ name, jobTitle, species }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{jobTitle}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Species = {species}
        </Card.Subtitle>
        <Card.Text>
          A company for innovative technology at your service!
        </Card.Text>
        <Card.Link href="#">innovativetech.com</Card.Link>
        <Card.Link href="#">LinkIn</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BuzinessCard;
