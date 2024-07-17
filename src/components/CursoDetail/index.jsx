import { useState } from "react"
import { Link } from "react-router-dom"
import { FcLike } from "react-icons/fc"
import { RiDislikeLine } from "react-icons/ri"
import { useCartContext, useFavoriteContext } from "../../contexts"

export const CursoDetail = ({id, title, description, price, image, duration, category='categoría'}) => {
    const [liked, setLiked] = useState(false)
    const [isAddCart, setIsAddCart] = useState(false)
    const { addCursoToCart } = useCartContext()
    const { addFavorite, removeFavorite } = useFavoriteContext()
    const date = new Date(duration).getHours()

    const handleLiked = () => {
        setTimeout(() => {
            setLiked(!liked)  
            if (!liked !== true) {
                removeFavorite(id)
                alert('se ha quitado el proudcto a favoritos')          
                return
            }

            addFavorite({id, title, description, price, image, duration, category, liked})        
            alert('se ha agregado el proudcto a favoritos')          
        }, 500);
    }
    
    const onAdd = () => {
        addCursoToCart({id, title, description, price, image, duration, category})
        alert('se ha agregado el producto al carrito')
        setIsAddCart(true)
    }
    
    return (
        <main className="relative flex justify-start items-start w-full min-h-screen">
            <Link to='/' className="absolute top-5 left-5 z-10 text-2xl">Volver</Link>
            <div className="relative flex justify-center items-center w-1/2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -transalte-y-1/2 text-yellow-200 text-5xl cursor-pointer border border-4 border-yellow-200 rounded-full p-5"> play </div>
                <img src={image} className="mt-36 border-2 border-yellow-200 rounded-lg" alt="imagen curso" />
                <div className="absolute bottom-6 right-6">
                    { liked ?
                            <FcLike className="w-8 h-8 cursor-pointer"  onClick={handleLiked}/>
                        :
                            <RiDislikeLine className="w-8 h-8 cursor-pointer" onClick={handleLiked}/>
                    }
                </div>
            </div>
            <div className="flex flex-col justify-start items-start w-1/2 mt-36 px-8">
                <h2 className="text-3xl">{title}</h2>
                <p className="mt-4"><strong>Descripción:</strong> {description}</p>
                <p className="mt-4"><strong>Precio:</strong> ${price}</p>
                <p className="mt-4"><strong>Duración:</strong> {date + 1}hs.</p>
                <p className="mt-4"><strong>Categoría:</strong> {category}</p>
                {/* <p>Agregar a favorito: <FcLike /></p> */}
                {
                    isAddCart ?
                        <div className="flex justify-center items-center gap-5">
                            <Link 
                                to={'/'}
                                className="mt-32 border-2 border-yellow-200 rounded-lg p-3"                                            
                            >
                                Seguir comprando
                            </Link>
                            <Link 
                                to={'/cart'}
                                className="mt-32 border-2 border-yellow-200 rounded-lg p-3"                                          
                            >
                                Ir al Carrito
                            </Link>
                        </div>
                    :
                        <button 
                            className="mt-32 border-2 border-yellow-200 rounded-lg p-3"
                            onClick={onAdd}                
                        >
                            Agregar al Carrito
                        </button>

                }
            </div>           
        </main>
    )
}
