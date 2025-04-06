// A Mastermind evaluation peg component.

const EvalPeg = (props) => {
  return (
    <span
      style={{
        ...pegStyle,
        backgroundColor: props.color,
      }}
    ></span>
  );
};

const pegStyle = {
  position: "absolute",
  height: "10px",
  width: "10px",
  backgroundColor: "black",
  borderRadius: "50%",
  display: "inline-block",
};

export default EvalPeg;
