function BoxWithColors(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "purple",
          border: "5px",
          borderColor: "solid black",
          color: "yellow",
          display: "flex",
          justifyItems: "right",
          alignItems: "end",
          textAlign: "justify",
        }}
      >
        {props.text}
        {props.children}
      </div>

      <div
        id="box2"
        style={{
          backgroundColor: "honeydew",
          borderWidth: "3px",
          borderColor: "black",
          color: "burlywood",
          display: "flex",
          alignSelf: "flex-end",
          alignContent: "start",
          height: "90px",
          width: "250px",
          margin: "5px",
          padding: "2px",
          fontWeight: "bolder",
        }}
      >
        🎶Lalalala🎶 I am box No 2 but with id instead of "className"
      </div>
    </>
  );
}
export default BoxWithColors;
