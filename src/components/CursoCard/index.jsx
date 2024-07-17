import { Link } from "react-router-dom"
import { FcLike, FcDislike } from "react-icons/fc"
import { RiDislikeLine } from "react-icons/ri"

export const CursoCard = ({id, image, title, description, price, duration}) => {
    const date       = new Date(duration)
    // const formatDate = date.toLocaleString() 

    return (
        <Link to={`/detalle/${id}`} className="w-[30%] border bottom-1 border-yellow-200 rounded-lg p-5 hover:bg-yellow-50 hover:bg-opacity-10 hover:scale-105">
            <img src={image} className="rounded-lg" alt="image" />
            <div className="flex justify-between items-center w-full">
                <h2 className="mt-2">{title}</h2>
                {/* <RiDislikeLine /> */}
                <RiDislikeLine />
            </div>
            <div className="flex justify-between items-centerw-full mt-5">
                <p>Precio: ${price}</p>
                <p>Horas: {date.getHours() + 1}</p>
            </div>
        </Link>
    )
}
