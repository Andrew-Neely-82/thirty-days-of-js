import QaPairs from "../../components/qaPairs/QaPairs";
import { qaPairs } from "./work";

const DayOne = () => {
  return (
    <div className="Day">
      <h2>Day One Exercises</h2>
      <ol>
        <QaPairs code={qaPairs} />
      </ol>
    </div>
  );
};

export default DayOne;
