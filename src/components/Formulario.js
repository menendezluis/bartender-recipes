import React, { useContext, useState} from "react";
import { CategoriaContext } from '../context/CategoriaContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState ({
        nombre: '',
        categorias: ''
    })
    const { categorias } = useContext(CategoriaContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    return (
        <form className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-2">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta} />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categorias"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar Recetas"/>
                </div>
            </div>
        </form>

    );
}

export default Formulario;