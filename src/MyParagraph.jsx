import style from "./MyParagraph.css";
const MyParagraph = ({ children }) => {
  return (
    <>
      <p className="mijnParagraaf">{children}</p>;
    </>
  );
};
export default MyParagraph;
