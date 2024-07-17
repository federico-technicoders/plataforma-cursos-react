import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CursoDetail, Loading} from "../../components"

const getProduct = async url => {
    const response = await fetch(url).then(res => res.json())
    return response.payload
}



export const CursoDetailPage = () => {
    const [ curso, setCurso ] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { cid } = useParams()    

    useEffect(() => {
        const url = `https://pe-products-mock.onrender.com/api/products/${cid}`        
        getProduct(url)
        .then(data => setCurso(data))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))
    }, [cid])
    
    
    return (
        <div className="flex flex-col justify-start items-start mt-28 w-full min-h-screen">
            <h1 className="text-5xl uppercase">Curso</h1>
            {
                isLoading ? 
                        <Loading />
                    : 
                        <CursoDetail {...curso} />              

            }
        </div>
    )
}
