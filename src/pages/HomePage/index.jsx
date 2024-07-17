import { useEffect, useState } from "react"
import { CiShoppingCart, CiHeart } from "react-icons/ci"
import { Link, NavLink } from "react-router-dom"
import { CursosList } from "../../components"


const getCursos = async (url) => {
    const response = await fetch(url).then(res => res.json() )
    return response.payload
}

const categories = [
    {id: 1, name: 'Frontend', path: 'frontend', description: 'frontend'},
    {id: 2, name: 'Backend', path: 'backend', description: 'backend'},
    {id: 3, name: 'Fullstack', path: 'fullstack', description: 'fullstack'},
    {id: 4, name: 'Mobile', path: 'mobile', description: 'moobile'},    
    {id: 5, name: 'Ui/ux', path: 'ui-ux', description: 'ui-u'}
]

const CartIcon = () =>  {
    return (
        <div className="absolute flex justify-center items-center gap-3 top-10 right-10">
            <Link to={'/favorite'} className="flex flex-col justify-center items-center">
                <CiHeart className="w-12 h-12" />
                <p>Favoritos</p>
            </Link>
            <Link to={'/cart'} className="flex flex-col justify-center items-center">
                <CiShoppingCart className="w-12 h-12" />
                <p>Carrito</p>
            </Link>
        </div>
    )
}
                        

const Header = () => {
    return  <header className="w-full">
                <CartIcon />
                <div className="flex flex-col justify-center items-center gap-5 w-full font-extrabold">
                    <h1 className="text-5xl uppercase">Technicoders</h1>
                    <h2 className="text-4xl">Cursos</h2>
                </div>

                <navbar className="flex flex-wrap gap-6 justify-center items-center  sm:grid-cols-3 md:grid-cols-6 w-full mt-10">
                    {categories.map(({id, name, path}) => (
                        <NavLink key={id} to={`/${path}`} className="text-center border border-1 border-yellow-200 hover:bg-yellow-300 hover:text-black p-3 rounded-lg uppercase w-[15%]">{name}</NavLink >
                    ))}
                </navbar>
            </header>
}

const InputSearch = ()  =>  <div className="grid place-content-center w-full p-5 mt-10 ">
                                <input type="text" name="search" className="border border-1 border-yellow-200 rounded-lg p-3" placeholder="Ingrese lo que está buscando"/>
                            </div>

export const HomePage = () => {
    const [cursos, setCursos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const url = 'https://pe-products-mock.onrender.com/api/products'
        getCursos(url)
        .then(data => setCursos(data))
        .catch((error)=> console.log('error: ',error))
        .finally(()=> setIsLoading(false))        
    }, [])

    return (
        <div className="flex flex-col justify-start items-start w-full h-screen mt-24">
            <Header />
            <InputSearch />
            <main className="flex flex-wrap gap-5 justify-center items-center w-full mt-24">
                {
                    isLoading ? 
                        <h2 className="text-5xl">Cargando...</h2> 
                    : 
                        <CursosList cursos={cursos} />
                }               
            </main>
        </div>
    )
}
