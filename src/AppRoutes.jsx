
import { Routes, Route, Navigate } from 'react-router-dom'
import { CartPage, CursoDetailPage, FavoritePage, HomePage, Login, NotFound404, Register } from './pages'
import { CartContextProvider, FavoriteContextProvider } from './contexts'





function AppRoutes() {
    return (     
        <CartContextProvider>
            <FavoriteContextProvider>
                <div className='flex flex-col justify-start items-start px-[10%] w-full min-h-screen'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/notfound404" element={<NotFound404 />} />
                        <Route path="/detalle/:cid" element={<CursoDetailPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/favorite" element={<FavoritePage />} />

                        <Route path="*" element={<Navigate to={'/notfound404'} />} />
                    </Routes>
                </div>    
            </FavoriteContextProvider>
        </CartContextProvider>        
    )
}

export default AppRoutes
