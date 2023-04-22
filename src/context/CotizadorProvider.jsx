import { createContext , useState} from "react"

const CotizadorContext= createContext()

function CotizadorProvider({children}){

    const [datos,setDatos]=useState({marca:'', year:'', plan:''})

    const handleChangeValues=(e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    const [error,setError]=useState('')

    return(
        <CotizadorContext.Provider
            value={{
                handleChangeValues,
                datos,
                error,
                setError 
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
};

export default CotizadorContext;