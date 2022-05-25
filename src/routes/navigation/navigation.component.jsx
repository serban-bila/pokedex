import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link style={{textDecoration: "none"}} to="/">
            <h1>Pokedex</h1>
            </Link>
            <Outlet />
        </div>
    );
};

export default Navigation;