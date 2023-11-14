const OnlyEven = ({ getallen }) => {
  const onlyEven = getallen.filter((num) => num % 2 === 0).join(" - ");
  return <p>{onlyEven}</p>;
};
export default OnlyEven;
