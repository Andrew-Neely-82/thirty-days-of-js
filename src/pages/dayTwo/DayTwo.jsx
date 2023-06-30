import { ThreeExercises } from "../../components/pageNav/index.js";
import QaPairs from "../../components/qaPairs/QaPairs.jsx";
import { exerciseOne } from "./exerciseOne.js";
import { exerciseTwo } from "./exerciseTwo.js";
import { exerciseThree } from "./exerciseThree.js";

const DayTwo = () => {
  return (
    <div className="Day">
      <div className="Day_content">
        <h1>Day Two Exercises</h1>
        <h2 id="exerciseOne">Exercise 1</h2>
        <ol>
          <QaPairs code={exerciseOne} />
        </ol>
        <h2 id="exerciseTwo">Exercise 2</h2>
        <ol>
          <QaPairs code={exerciseTwo} />
        </ol>
        <h2 id="exerciseThree">Exercise 3</h2>
        <ol>
          <QaPairs code={exerciseThree} />
        </ol>
      </div>
      <ThreeExercises />
    </div>
  );
};

export default DayTwo;
