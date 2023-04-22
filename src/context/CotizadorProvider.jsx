import { createContext , useState} from "react"
import { diferenciaYear, marcaAuto, typePlan} from "../helpers"

const CotizadorContext= createContext()

function CotizadorProvider({children}){

    const [datos,setDatos]=useState({marca:'', year:'', plan:''})
    const [error,setError]=useState('')

    const handleChangeValues=(e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    const cotizarSeguroAuto=()=>{
        let base=2000;

        const diferencia = diferenciaYear(datos.year)

        base -= (((diferencia*3)*base)/100)
        
        base *= marcaAuto(datos.marca)

        base *= typePlan(datos.plan)

        return base
    }
    return(
        <CotizadorContext.Provider
            value={{
                handleChangeValues,
                datos,
                error,
                setError,
                cotizarSeguroAuto 
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