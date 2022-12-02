import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function DogHomePage() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle ">
      <MDBCard>
        <div className="d-flex justify-content-center">
          <MDBCardImage
            src="./images/dog.png"
            className="figure-img img-fluid rounded"
            style={{ width: "15%" }}
            position="center"
            alt="doggo"
          />
        </div>
        <div className="flex-grow-1 ms-6">
          <MDBCardBody>
            <MDBCardTitle>Doggo's attempt on APIs</MDBCardTitle>
            <MDBCardText>Let's try some APis</MDBCardText>
          </MDBCardBody>
        </div>
      </MDBCard>
    </div>
  );
}
