import { CursosList } from "../../components/CursosList"
import { useFavoriteContext } from "../../contexts/FavoritecContext/FavoriteContext"

export function FavoritePage() {
    const { favoriteList } = useFavoriteContext()
    console.log(favoriteList)
    return (
        <main className="relative flex flex-col justify-start items-start gap-24 px-[10%] w-full">
            <h1 className="text-5xl font-bold text-white mt-24">Favoritos</h1>
            { favoriteList.length === 0 && <h2>No hay ningún curso en Favoritos</h2> }
            <div className="flex flex-wrap justify-start gap-6 items-center w-full">
                <CursosList cursos={favoriteList} />
            </div>
        </main>
    )
}
