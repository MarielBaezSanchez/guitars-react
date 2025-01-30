export default function Guitar({ guitar, agregarCarrito }) {
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={'/img/' + guitar.imagen + '.jpg'} alt={'imagen' + guitar.nombre}>
                </img>
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.nombre}</h3>
                <p> {guitar.descripcion}</p>
                <p className="fw-black text-primary fs-3">$ {guitar.precio}</p>
                <button
                    type="button"
                    onClick={() => agregarCarrito(guitar)}
                    className="btn btn-dark w-100 "
                >Agregar al Carrito</button>
            </div>
        </div>)
}