import { useCallback,useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import { MARCAS,PLANES} from "../constanst";

function Resultado() {

    const {resultado,datos}=useCotizador()
    const {marca,year,plan}=datos;

    const [nombreMarca]=useCallback(
            MARCAS.filter(m=>m.id===Number(marca)),
            [resultado]
        )
    const [nombrePlan]=useCallback(
        PLANES.filter(p=>p.id===Number(plan)),
        [resultado]
    )

    const yearRef=useRef(year)

    if(resultado===0) return null
    return (
        <div className="w-full bg-gray-100 py-5 text-center mt-5 rounded-lg">
            <h3 className="uppercase font-bold text-2xl text-gray-700 mb-2">resumen</h3>
            <p className="text-lg"><span className="font-bold text-xl">Marca: </span> {nombreMarca.marca}</p>
            <p className="text-lg"><span className="font-bold text-xl">Plan: </span> {nombrePlan.plan}</p>
            <p className="text-lg"><span className="font-bold text-xl">Año del auto: </span> {yearRef.current}</p>
            <p className="text-lg"><span className="font-bold text-xl uppercase">Total Cotizacion: </span> {resultado}</p>
        </div>
    )
}

export default Resultado
