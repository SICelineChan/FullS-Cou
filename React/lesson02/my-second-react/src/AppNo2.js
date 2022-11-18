import Saludo from "./Saludo";
import DateOfToday from "./DateOfToday";

function AppNo2() {
  return (
    <div className="AppNo2">
      <DateOfToday></DateOfToday>

      <Saludo name="Juan" location="Mexico City!!">
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
