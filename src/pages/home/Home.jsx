const Home = () => {
  const author = "https://github.com/Asabeneh/30-Days-Of-JavaScript";
  const me = "https://github.com/Andrew-Neely-82";
  const creator = "https://github.com/devinesia";
  const original = "https://30dayjavascript.js.org/";
  const paypalLink = "https://www.paypal.me/asabeneh";
  const paypal = "https://30dayjavascript.js.org/images/paypal_lg.png";

  const Link = (href, context) => {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {context}
      </a>
    );
  };

  return (
    <div className="Day">
      <div className="Day-wrapper">
        <h1>Getting started</h1>
        <p>30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days, please just follow your own pace.</p>
        <ul>
          <li>
            <span>Material source: 30 days of JavaScript</span>
          </li>
          <li>
            <span>Author: {Link(author, "Asabeneh Yetayeh")}</span>
          </li>
          <li>
            <span>This sites creator: {Link(me, "Andrew Neely")}</span>
          </li>
          <li>
            <span>Original Site creator: {Link(creator, "Devinesia")}</span>
          </li>
          <li>
            <span>Link to the original site: {Link(original, "Here")}</span>
          </li>
        </ul>
        <h2>Support</h2>
        <p>You can support the original author to produce more educational materials</p>
        <a href={paypalLink} target="_blank" rel="noreferrer">
          <img src={paypal} alt="paypal" />
        </a>
      </div>
    </div>
  );
};
export default Home;
