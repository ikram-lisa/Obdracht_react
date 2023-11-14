const Sum = ({ getallen }) => {
  const sum = getallen.reduce((acc, cur) => acc + cur, 0);
  return <p>{sum}</p>;
};
export default Sum;
