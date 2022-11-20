function BoxWithColors(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "purple",
          border: "5px",
          borderColor: "solid black",
          fontSize: "15px",
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
          fontSize: "15px",
          height: "70px",
          width: "200px",
          margin: "5px",
          padding: "2px",
          fontWeight: "bolder",
        }}
      >
        🎶Lalalala🎶 I'm box No.2 but with id instead of "className"
      </div>
    </>
  );
}
export default BoxWithColors;
