function Saludo(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightskyblue",
          color: "darkblue",
          fontWeight: "bold",
          fontSize: "25px",
          textAlign: "justify",
        }}
      >
        <h1>
          Hola!! {props.name} de {props.location} 🏜
        </h1>
      </div>
      {props.children}
    </>
  );
}
export default Saludo;
