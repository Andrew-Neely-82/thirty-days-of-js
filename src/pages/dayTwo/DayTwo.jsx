import QaPairs from "../../components/qaPairs/QaPairs.jsx";
import { qAndA } from "./exerciseOne";

const DayTwo = () => {
  return (
    <div className="Day">
      <h2>Day Two Exercises</h2>
      <h3>Exercise 1</h3>
      <ol>
        <QaPairs code={qAndA} />
      </ol>
      <h3>Exercise 2</h3>
      <ol>
        <QaPairs code={qAndA} />
      </ol>
      <h3>Exercise 3</h3>
      <ol>
        <QaPairs code={qAndA} />
      </ol>
    </div>
  );
};

export default DayTwo;
