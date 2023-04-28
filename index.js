const Box = (props) => {
  const { size, className } = props;
  return <p className={`${className}`}>{size}</p>;
};

const element = (
  <div className="body">
    <h1 className="heading">Boxes</h1>
    <div className="boxContainer">
      <Box size="Small" className="smallSize" />
      <Box size="Medium" className="mediumSize" />
      <Box size="Large" className="largeSize" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
