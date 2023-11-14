import Naam from "./Naam";
import Sum from "./Sum";
import FullName from "./FullName";
import OnlyEven from "./OnlyEven";
import MyParagraph from "./MyParagraph";
import BsSeparator from "./BsSeparator";

const App = () => (
  <>
    <h1>Opdrachten react les1.</h1>
    <Naam naam="ikram" />
    <BsSeparator />
    <Sum getallen={[1995, 9, 20]} />
    <BsSeparator />
    <FullName firstName="Ikram" lastName="Lamsaddeq" />
    <BsSeparator />
    <OnlyEven getallen={[0, 2, 4, 19, 7, 5, 16, 2]} />
    <BsSeparator />
    <MyParagraph>
      mijn paragraaf:Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </MyParagraph>
  </>
);
export default App;
