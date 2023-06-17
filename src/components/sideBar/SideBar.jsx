import "./style.scss";

const SideBar = () => {
  //
  const GenerateLinks = () => {
    const links = [];
    for (let i = 1; i <= 30; i++) {
      links.push(
        <li key={i}>
          <a href={`/Day${i}`}>Day {i}</a>
        </li>,
      );
    }
    return links;
  };

  return (
    <div className="Sidebar_">
      <div className="Sidebar_content">
        <h3>30 Days of JavaScript</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <GenerateLinks />
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
