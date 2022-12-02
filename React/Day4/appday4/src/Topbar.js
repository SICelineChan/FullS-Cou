import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Topbar({ title }) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <h1>{title}</h1>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Topbar;
