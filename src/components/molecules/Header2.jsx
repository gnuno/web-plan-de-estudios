import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Plan de Estudio Interactivo</Link>
        </div>
        <div className="flex-none">
        </div>
    </div>
    )
}

export default Header;