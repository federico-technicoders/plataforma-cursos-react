import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <main className="realtive w-full">           
            <section className="flex flex-col justify-center items-center w-full h-screen">     
            <h1>LOGIN</h1>           
                <form className="flex flex-col w-1/3 mb-5">
                    <label className="mb-1">Correo Electrício</label>
                    <input type="email" className="bg-slate-800 p-2 rounded mb-5" placeholder="ingresa tu correo electrónico"/>
                    <label className="mb-1">Contraseña</label>
                    <input type="password" className="bg-slate-800 p-2 rounded mb-10" placeholder="ingresa tu contraseña"/>
                    <button className="bg-[#EAFF6A] rounded p-2 text-black">Iniciar Sesión</button>
                </form> 
                <Link to={'/register'} className="mb-3">Crear una cuenta</Link>    
                <Link to={'#'} className="">Olvide mi contraseña</Link>              
            </section>
        </main>
    )
}
