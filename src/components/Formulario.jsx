import {MARCAS,AÑOS_SEGURO,PLANES} from "../constanst"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

function Formulario() {

    const {
        handleChangeValues,
        datos,
        error,
        setError
    }=useCotizador()

    function validateData(e){
        e.preventDefault()
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
    }
    return(
        <>
            <form onSubmit={(e)=>validateData(e)}>
                {error && <Error/>}
                <div className="my-4">
                    <label className="block mb-3 font-bold uppercase text-gray-400">Marca</label>
                    <select 
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={(e)=>handleChangeValues(e)}
                    >
                        <option value="">Seleccione una marca</option>
                        {
                            MARCAS.map(marca=>(
                                <option 
                                    key={marca.id}
                                    value={marca.id}
                                >
                                    {marca.marca}
                                </option>
                            ))
                        }
                    </select>

                </div>

                <div className="my-4">
                    <label className="block mb-3 font-bold uppercase text-gray-400">Año</label>
                    <select 
                        name="year"
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={(e)=>handleChangeValues(e)}
                    >
                        <option value="">Seleccione un año</option>
                        {
                            AÑOS_SEGURO.map(año=>(
                                <option 
                                    key={año}
                                    value={año}
                                >
                                    {año}
                                </option>
                            ))
                        }
                    </select>

                </div>

                <div className="my-4">
                    <label className="block mb-3 font-bold uppercase text-gray-400">Elige un plan</label>
                    <div className="flex gap-4">
                        {
                            PLANES.map(plan=>(
                                <div key={plan.id} className="flex gap-2 items-center">
                                    <label>{plan.plan}</label>
                                    <input onChange={(e)=>handleChangeValues(e)} type="radio" name="plan" value={plan.id}/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <input 
                    type="submit" 
                    value="Cotizar seguro"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 
                            text-white py-2 rounded-lg cursor-pointer font-bold uppercase shadow-lg"
                />
            </form>
        </>
    )
}

export default Formulario;
