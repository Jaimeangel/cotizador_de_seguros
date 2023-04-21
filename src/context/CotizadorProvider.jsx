import { createContext } from "react"

const CotizadorContext= createContext()

function CotizadorProvider({children}){
    const hola='hola mundo para todos'
    return(
        <CotizadorContext.Provider
            value={{
                hola:hola
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