import { NavVolver } from "../../components"
import { useCartContext } from "../../contexts"

export const CartPage = () => {
    const { cartList, removeCursoToCart } = useCartContext()
    return (
        <>
            <NavVolver path={'/'}>
                Ir a home
            </NavVolver>
            <main className="p-[10%] w-full">

                {
                    cartList.length === 0 && <h1 className="text-6xl text-center w-full">No hay productos en el carrito</h1>
                }
                {
                    cartList.map(curso  =>  <div className="w-full" key={curso.id} >
                                                <div className="flex justify-start items-center gap-6 w-full mt-12">
                                                    <img src={curso.image} className="w-24"/> 
                                                    <div className="flex flex-wrap justify-between items-center w-full">
                                                        <h1 className="text-2xl font-bold">{curso.title}</h1>
                                                        <p className="text-lg">Precio: {curso.price}</p>
                                                    </div>
                                                    <div className="text-2xl cursor-pointer" onClick={() => removeCursoToCart(curso.id)}> X </div>
                                                </div>
                                                <hr className="mt-3" />
                                            </div>
                                )
                }         
            </main>
        </>
    )
}
