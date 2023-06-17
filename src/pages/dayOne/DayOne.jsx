import { qaPairs } from "./work";

const Day1 = () => {
  const qAndA = () => {
    return qaPairs.map((qa, key) => (
      <li key={key}>
        <span>{qa.question}</span>
        {Array.isArray(qa.answer) ? (
          <ul>
            {qa.answer.map((ans, ansKey) => (
              <li key={ansKey}>{ans}</li>
            ))}
          </ul>
        ) : (
          <span>{qa.answer}</span>
        )}
      </li>
    ));
  };

  return (
    <div className="Day">
      <ol>{qAndA()}</ol>
    </div>
  );
};

export default Day1;
