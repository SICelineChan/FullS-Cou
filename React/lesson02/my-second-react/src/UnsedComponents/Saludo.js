function Saludo({ name, location, children }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightskyblue",
          color: "darkblue",
          fontWeight: "bold",
          fontSize: "25px",
          textAlign: "center",
        }}
      >
        <h1>
          Hola!! {name} de {location} 🏜
        </h1>
      </div>
      {children}
    </>
  );
}
export default Saludo;
