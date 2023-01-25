import { Link, } from "react-router-dom";
import "../styles/stylesheet.css";
export function SideNav() {
  return (
    <div className="nav">
      <div>
        <Link to="/">Double graph</Link>
      </div>
      <div>
        <Link to="/graphs">Graphs</Link>
      </div>
    </div>
  );
}
