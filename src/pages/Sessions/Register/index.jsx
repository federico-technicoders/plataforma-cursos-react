import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <main className="realtive w-full">
            <section className="flex flex-col justify-center items-center w-full h-screen">     
            <h1>REGISTER</h1>           
                <form className="flex flex-col w-1/3 mb-5">
                    <label className="mb-1">Nombres</label>
                    <input type="text" className="bg-slate-800 p-2 rounded mb-5" placeholder="ingresa tus nombres"/>
                    <label className="mb-1">Apellidos</label>
                    <input type="text" className="bg-slate-800 p-2 rounded mb-5" placeholder="ingresa tu apellidos"/>
                    <label className="mb-1">Correo Electrício</label>
                    <input type="email" className="bg-slate-800 p-2 rounded mb-5" placeholder="ingresa tu correo electrónico"/>
                    <label className="mb-1">Contraseña</label>
                    <input type="password" className="bg-slate-800 p-2 rounded mb-10" placeholder="ingresa tu contraseña"/>
                    <button className="bg-[#EAFF6A] rounded p-2 text-black">Iniciar Sesión</button>
                </form>   
                
                <Link to={'/login'} className="mb-3">Ya tiene cuenta?</Link>               
            </section>
        </main>
    )
}
