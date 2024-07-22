import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { postLogin } from "../../../api/sessions.api"

export const Login = () => {
    const [formDataUser, setFormDataUser] = useState({        
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // hacer el fetch para registrar al usuario
       
        try {
            const response = await postLogin(formDataUser).then(resp => resp.json())
            if (response.error) {
                alert(response.error)  
                return               
            }

            alert('Usuario loguedo correctamente')
            
            sessionStorage.setItem('tokenUser', JSON.stringify({
                user: {
                    email: response.data.email,
                    id: response.data._id,
                    role: response.data.role
                }               
            })) 

            setTimeout(() => {
                navigate('/',  { 
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
        <main className="realtive w-full" onSubmit={handleSubmit}>           
            <section className="flex flex-col justify-center items-center w-full h-screen">     
            <h1>LOGIN</h1>           
                <form className="flex flex-col w-1/3 mb-5">
                    <label className="mb-1">Correo Electrício</label>
                    <input 
                        type="email" 
                        name="email"
                        className="bg-slate-800 p-2 rounded mb-5" 
                        placeholder="ingresa tu correo electrónico"
                        value={formDataUser.email}
                        onChange={handleChange}
                    />
                    <label className="mb-1">Contraseña</label>
                    <input 
                        type="password" 
                        name="password"
                        className="bg-slate-800 p-2 rounded mb-10" 
                        placeholder="ingresa tu contraseña"
                        value={formDataUser.password}
                        onChange={handleChange}
                    />
                    <button className="bg-[#EAFF6A] rounded p-2 text-black">Iniciar Sesión</button>
                </form> 
                <Link to={'/register'} className="mb-3">Crear una cuenta</Link>    
                <Link to={'#'} className="">Olvide mi contraseña</Link>              
            </section>
        </main>
    )
}
