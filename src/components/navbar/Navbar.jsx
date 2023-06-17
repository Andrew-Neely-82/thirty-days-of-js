import "./style.scss";

const Navbar = () => {
  return (
    <div className="Navbar_">
      <div className="Navbar_name">
        <img src="https://30dayjavascript.js.org/images/javascript.png" alt="JS" />
        <span>30 Days of JavaScript</span>
      </div>
      <div className="Navbar_links-container">
        <a href="/">Home</a>
      </div>
    </div>
  );
};
export default Navbar;
