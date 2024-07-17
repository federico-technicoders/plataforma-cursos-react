import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext([])

export const useFavoriteContext = () => useContext(FavoriteContext)

export const FavoriteContextProvider = ({children}) => {
    const [favoriteList, setFavoriteList] = useState([])

    const addFavorite = curso => {
        setFavoriteList([...favoriteList, curso])
    }

    const removeFavorite = id => {
        if (confirm('Esta seguro que quiere eliminar curso de Favoritos?')) {
            setFavoriteList(favoriteList.filter(curso => curso.id !== id))
        }            
    }
    // console.log('Favoritos: ',favoriteList)
    return (
        <FavoriteContext.Provider value={{
            favoriteList,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}