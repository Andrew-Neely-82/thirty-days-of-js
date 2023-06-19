import GenerateLinks from "./GenerateLinks";
import "./style.scss";

const SideBar = () => {
  return (
    <div className="Sidebar_">
      <div className="Sidebar_content">
        <h3>30 Days of JavaScript</h3>
        <ul>
          <a href="/">Getting Started</a>
          <GenerateLinks />
        </ul>
      </div>
    </div>
  );
};
export default SideBar;