import { CursoCard } from "../CursoCard"


export const CursosList = ({cursos=[]}) => {
    return (
        <>

            
            {cursos.map(curso => <CursoCard key={curso._id} {...curso} />)}
        </>
    )
}
