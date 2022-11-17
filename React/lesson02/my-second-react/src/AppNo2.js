import Saludo from "./Saludo";

function AppNo2() {
  return (
    <div className="AppNo2">
      <Saludo name="Juan" location="la Ciudad de México ">
        <h2
          style={{
            backgroundColor: "lightskyblue",
            fontSize: "18px",
            fontWeight: "bolder",
            color: "lightcoral",
            textAlign: "center",
          }}
        >
          Buenos días! Qué tengas buen día!
        </h2>
        <h4
          style={{
            fontSize: "12px",
            backgroundColor: "lemonchiffon",
            textAlign: "start",
          }}
        >
          The above is a Component & its children ☝!{" "}
        </h4>
      </Saludo>
    </div>
  );
}

export default AppNo2;
