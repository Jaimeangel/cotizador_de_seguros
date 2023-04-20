import { MARCAS } from "../constanst"

function Formulario() {
  return (
    <>
        <form>
            <div className="my-5">
                <label className="block mb-3 font-bold uppercase text-gray-400">Marca</label>
                <select 
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-200"
                >
                    <option value="">Seleccione una marca</option>
                    {
                        MARCAS.map(marca=>(
                            <option 
                                key={marca.id}
                                value={marca.id}
                            >{marca.marca}</option>
                        ))
                    }
                </select>

            </div>
        </form>
      
    </>
  )
}

export default Formulario
