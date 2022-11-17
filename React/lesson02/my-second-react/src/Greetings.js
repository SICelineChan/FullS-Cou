function Greetings(props) {
  return (
    <>
      <h2>
        Hello {props.name}, from {props.location}
      </h2>
      {props.children}
    </>
  );
}
export default Greetings;
// The props within the function param is a conventional parameter. But you have to call it props
