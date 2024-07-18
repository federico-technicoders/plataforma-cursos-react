import { NavVolver } from "../../components"
import { CursosList } from "../../components/CursosList"
import { useFavoriteContext } from "../../contexts/FavoritecContext/FavoriteContext"

export function FavoritePage() {
    const { favoriteList } = useFavoriteContext()
    console.log(favoriteList)
    return (
        <main className="relative flex flex-col justify-start items-start gap-24 px-[10%] w-full">
            <NavVolver path={'/'}>Volver</NavVolver>
            <h1 className="text-6xl font-bold text-white text-center mt-24 w-full">Favoritos</h1>
            { favoriteList.length === 0 && <h2 className="text-4xl text-center font-bold w-full">No hay ningún curso en Favoritos</h2> }
            <div className="flex flex-wrap justify-start gap-6 items-center w-full">
                <CursosList cursos={favoriteList} />
            </div>
        </main>
    )
}
