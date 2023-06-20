import PageWithOneExercise from "../../components/pageNav/PageWithOneExercise";
import QaPairs from "../../components/qaPairs/QaPairs";
import { qaPairs } from "./work";

const DayOne = () => {
  return (
    <div className="Day" id="exerciseOne">
      <div className="Day_content">
        <h2>Day One Exercises</h2>
        <h3>Exercise 1</h3>
        <ol>
          <QaPairs code={qaPairs} />
        </ol>
      </div>
      <PageWithOneExercise />
    </div>
  );
};

export default DayOne;
