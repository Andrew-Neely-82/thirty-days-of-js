import QaPairs from "../../components/qaPairs/QaPairs";
import { exerciseOne } from "./exerciseOne";

const DayThree = () => {
  return (
    <div className="Day">
      <h2>Day Three Exercises</h2>
      <ol>
        <QaPairs code={exerciseOne} />
      </ol>
    </div>
  );
};
export default DayThree;
