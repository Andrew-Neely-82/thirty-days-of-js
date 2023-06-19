import CopyCodeBox from "../copyCode/CopyCodeBox";

const QaPairs = ({ code }) => {
  return code.map((qa, key) => (
    <li className="ol-li" key={key}>
      <span>
        {qa.q}
        <CopyCodeBox code={qa.a} />
      </span>
    </li>
  ));
};

export default QaPairs;
