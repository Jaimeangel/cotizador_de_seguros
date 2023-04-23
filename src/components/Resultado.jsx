import useCotizador from "../hooks/useCotizador"
import { MARCAS,PLANES} from "../constanst";

function Resultado() {

    const {resultado,datos}=useCotizador()
    const {marca,year,plan}=datos;

    const [nombreMarca]=MARCAS.filter(m=>m.id===Number(marca))
    const [nombrePlan]=PLANES.filter(p=>p.id===Number(plan))

    if(resultado===0) return null
    return (
        <div className="w-full bg-gray-100 py-5 text-center mt-5 rounded-lg">
            <h3 className="uppercase font-bold text-2xl text-gray-700 mb-2">resumen</h3>
            <p className="text-lg"><span className="font-bold text-xl">Marca: </span> {nombreMarca.marca}</p>
            <p className="text-lg"><span className="font-bold text-xl">Plan: </span> {nombrePlan.plan}</p>
            <p className="text-lg"><span className="font-bold text-xl">Año del auto: </span> {year}</p>
            <p className="text-lg"><span className="font-bold text-xl uppercase">Total Cotizacion: </span> {resultado}</p>
        </div>
    )
}

export default Resultado
