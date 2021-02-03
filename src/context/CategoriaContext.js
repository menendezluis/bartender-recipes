import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const CategoriaContext = createContext();

const CategoriasProvider = (props) => {
    
    const [categorias,guardarCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await Axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);
    
    return(
        <CategoriaContext.Provider
        value={{
            categorias
        }}>
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriasProvider;