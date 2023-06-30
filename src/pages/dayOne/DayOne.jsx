import PageWithOneExercise from "../../components/pageNav/PageWithOneExercise";
import QaPairs from "../../components/qaPairs/QaPairs";
import { exerciseOne } from "./work";

const DayOne = () => {
  return (
    <div className="Day" id="exerciseOne">
      <div className="Day_content">
        <h1>Day One Exercises</h1>
        <h2>Exercise 1</h2>
        <ol>
          <QaPairs code={exerciseOne} />
        </ol>
      </div>
      <PageWithOneExercise />
    </div>
  );
};

export default DayOne;
