import QaPairs from "../../components/qaPairs/QaPairs.jsx";
import { exerciseOne } from "./exerciseOne.js";
import { exerciseTwo } from "./exerciseTwo.js";
import { exerciseThree } from "./exerciseThree.js";

const DayTwo = () => {
  return (
    <div className="Day">
      <h2>Day Two Exercises</h2>
      <h3>Exercise 1</h3>
      <ol>
        <QaPairs code={exerciseOne} />
      </ol>
      <h3>Exercise 2</h3>
      <ol>
        <QaPairs code={exerciseTwo} />
      </ol>
      <h3>Exercise 3</h3>
      <ol>
        <QaPairs code={exerciseThree} />
      </ol>
    </div>
  );
};

export default DayTwo;
