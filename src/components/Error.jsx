import useCotizador from "../hooks/useCotizador";

function Error() {
    const {error}=useCotizador()
    return (
        <div className="w-full text-center font-bold uppercase bg-red-100 border border-red-400 py-2 text-red-600">
            <p>{error}</p>
        </div>
    )
}

export default Error;
