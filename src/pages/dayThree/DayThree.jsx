import { ThreeExercises } from "../../components/pageNav/index";
import QaPairs from "../../components/qaPairs/QaPairs";
import { exerciseOne } from "./exerciseOne";
import { exerciseTwo } from "./exerciseTwo";

const DayThree = () => {
  return (
    <div className="Day">
      <div className="Day_content">
        <h2>Day Three Exercises</h2>
        <h3 id="exerciseOne">Exercise 1</h3>
        <ol>
          <QaPairs code={exerciseOne} />
        </ol>
        <h3 id="exerciseTwo">Exercise 2</h3>
        <ol>
          <QaPairs code={exerciseTwo} />
        </ol>
        <h3 id="exerciseThree">Exercise 3</h3>
        <ol>
          <QaPairs code={exerciseOne} />
        </ol>
      </div>
      <ThreeExercises />
    </div>
  );
};
export default DayThree;
