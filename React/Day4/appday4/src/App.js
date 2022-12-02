import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BuzinessCard from "./BuzinessCard";
import Topbar from "./Topbar";
import { Link, Route } from "wouter";
import ChewysPlanet from "./ChewysPlanet";

function App() {
  // let nextId = 1;
  // const [newName, setName] = useState("");
  // const [newInputFullName, setNewInputFullName] = useState([]);

  const [starWarsChar, setNewStarWarsChar] = useState([]);
  // const [rickMorty, setNewRickMorty] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/13/")
      .then(function (response) {
        return response.json();
      })
      .then(function (starWars) {
        // console.log(starWars);
        setNewStarWarsChar(starWars);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/1,9,21")
  //     .then(function (results) {
  //       return results.json();
  //     })
  //     .then(function (rickMortyApi) {
  //       setNewRickMorty(rickMortyApi);
  //     });
  // }, []);

  // const [newTitle, setNewTitle] = useState("");
  // const [inputNewTitle, setInputNewTitle] = useState([]);

  // const staff = [
  //   {
  //     id: 1,
  //     name: "Maria Jett",
  //     jobTitle: "Managing Director",
  //     species: "Human",
  //   },
  //   {
  //     id: 2,
  //     name: "Lillian Brown",
  //     jobTitle: "Marketing Director",
  //     species: "Human",
  //   },
  // ];

  return (
    <>
      <body>
        <div>
          <Container>
            <Row>
              <Col sm={6}>
                <Link href="/">
                  <a className="link">Profile</a>
                </Link>
                <br />
                <Link href="/chewbecca">
                  <a className="link"> Chewy's Page </a>
                </Link>

                <Route path="/about">
                  <p>About Us</p>
                  <h2>There are many about Us pages</h2>
                </Route>
                <Route path="/chewbecca">
                  <p>{JSON.stringify(starWarsChar.name)}</p>
                  <p>{JSON.stringify(starWarsChar.birth_year)}</p>
                  <p>
                    <ChewysPlanet></ChewysPlanet>
                  </p>
                </Route>
                {/* default route */}
                <Route>
                  <>
                    <p>Hello People!!</p>
                    <p>this is the default page!</p>
                  </>
                </Route>
              </Col>{" "}
            </Row>{" "}
          </Container>
        </div>
      </body>
    </>
  );
}
export default App;

/* <body>
        <Topbar title="Earthlings"></Topbar>
        <Container>
          <Row>
            <Col sm={6}>
              {staff.map((teamCard) => (
                <BuzinessCard
                  name={teamCard.name}
                  jobTitle={teamCard.jobTitle}
                  species={teamCard.species}
                />
              ))}
            </Col>
            <Col sm={6}>
              <h2>New Staff</h2>
              <label>
                <h4> Full Name:</h4>
                <input
                  value={newName}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <Button
                variant="outline-success"
                onClick={() => {
                  setName("");
                  setNewInputFullName([
                    ...newInputFullName,
                    { id: nextId++, name: newName },
                  ]);
                }}
              >
                {" "}
                Enter
              </Button>
              <ul>
                {newInputFullName.map((fullName) => (
                  <BuzinessCard
                    name={fullName.name}
                    species={fullName.species}
                  ></BuzinessCard>
                ))}
              </ul>
              <Col>
                <BuzinessCard
                  name={JSON.stringify(starWarsChar.name)}
                ></BuzinessCard>
                {/* <p>{JSON.stringify(starWarsChar)}</p> */

//       </Col>
//       <Col>
//         {rickMorty.length && (
//           <BuzinessCard
//             name={JSON.stringify(rickMorty[1].name)}
//           ></BuzinessCard>
//         )}

//         <p>{JSON.stringify(rickMorty)}</p>

//         <p>{JSON.stringify(rickMorty[1].name)}</p>
//       </Col>
//     </Col>
//   </Row>
// </Container>

// }

// export default App;
