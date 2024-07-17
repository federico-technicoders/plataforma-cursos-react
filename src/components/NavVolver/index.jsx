import { Link } from "react-router-dom"

export const NavVolver = ({path, children}) => {
    return (
        <Link to={path} className="absolute top-5 left-5 font-bold text-2xl">
            { children }
        </Link>
    )
}
