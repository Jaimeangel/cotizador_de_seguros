import { createContext , useState} from "react"
import { diferenciaYear, marcaAuto, typePlan,formatCash} from "../helpers"

const CotizadorContext= createContext()

function CotizadorProvider({children}){

    const [datos,setDatos]=useState({marca:'', year:'', plan:''})
    const [error,setError]=useState('')
    const [resultado,setResultado]=useState(0)
    const [cargando,setCargando]=useState(false)

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

        base = formatCash(base)

        setCargando(true)

        setTimeout(() => {
            setResultado(base)
            setCargando(false)
        }, 2000);

    }
    return(
        <CotizadorContext.Provider
            value={{
                handleChangeValues,
                datos,
                error,
                setError,
                cotizarSeguroAuto,
                resultado,
                cargando 
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