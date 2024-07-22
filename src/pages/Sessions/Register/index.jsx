import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { postRegister } from "../../../api"

export const Register = () => {
    const [formDataUser, setFormDataUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // hacer el fetch para registrar al usuario
        try {
            const response = await postRegister(formDataUser).then(resp => resp.json())
            if (response.error) {
                alert(response.error)  
                return               
            }

            alert('Usuario registrado correctamente')
            setTimeout(() => {
                navigate('/login',  { 
                    replace: true 
                })
            }, 500)
           
            
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const handleChange = (e) => {
        setFormDataUser({
            ...formDataUser, 
            [e.target.name]: e.target.value 
        })
    }

    return (
        <main className="realtive w-full">
            <section className="flex flex-col justify-center items-center w-full h-screen">     
            <h1>REGISTER</h1>           
                <form className="flex flex-col w-1/3 mb-5" onSubmit={handleSubmit}>
                    <label className="mb-1">Nombres</label>
                    <input 
                        type="text" 
                        name='first_name'
                        className="bg-slate-800 p-2 rounded mb-5" 
                        placeholder="ingresa tus nombres"
                        value={formDataUser.first_name}
                        onChange={handleChange}
                    />
                    <label className="mb-1">Apellidos</label>
                    <input 
                        type="text" 
                        name='last_name'
                        className="bg-slate-800 p-2 rounded mb-5" 
                        placeholder="ingresa tu apellidos"
                        onChange={handleChange}
                        value={formDataUser.last_name}
                    />
                    <label className="mb-1">Correo Electrício</label>
                    <input 
                        type="email" 
                        name='email'
                        className="bg-slate-800 p-2 rounded mb-5" 
                        placeholder="ingresa tu correo electrónico"
                        value={formDataUser.email}
                        onChange={handleChange}
                    />
                    <label className="mb-1">Contraseña</label>
                    <input 
                        type="password" 
                        name='password'
                        className="bg-slate-800 p-2 rounded mb-10" 
                        placeholder="ingresa tu contraseña"
                        value={formDataUser.password}
                        onChange={handleChange}
                    />
                    <button className="bg-[#EAFF6A] rounded p-2 text-black">Iniciar Sesión</button>
                </form>   
                
                <Link to={'/login'} className="mb-3">Ya tiene cuenta?</Link>               
            </section>
        </main>
    )
}
