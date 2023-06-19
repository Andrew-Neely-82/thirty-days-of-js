import CopyCodeBox from "../copyCode/CopyCodeBox";

const QaPairs = ({ code }) => {
  return code.map((qa, key) => (
    <li className="ol-li" key={key}>
      <span dangerouslySetInnerHTML={{ __html: qa.q }}></span>
      <CopyCodeBox code={qa.a} />
    </li>
  ));
};

export default QaPairs;
