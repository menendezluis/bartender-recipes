import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState ({
        nombre: '',
        categorias: ''
    })
    const [consultar, guardarConsultar] = useState(false);
    const { nombre, categorias } = busqueda;
    useEffect(() => {
        if (consultar){
        const obtenerRecetas = async () => {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categorias}`;
            
            const resultado = await Axios.get(url);
            guardarRecetas(resultado.data.drinks);
        }
        obtenerRecetas();
        
        }
    }, [busqueda]);
    return (
        <RecetasContext.Provider
        value = {{
            recetas,
            buscarRecetas,
            guardarConsultar
        }}>
            {props.children}
        </RecetasContext.Provider>
    );
}
export default RecetasProvider;