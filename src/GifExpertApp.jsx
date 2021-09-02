// ---------------------------------------------------------------------------------------
// Componente: GifExpertApp.jsx
// ---------------------------------------------------------------------------------------
// Description: Aplicación que muestra imágenes gifs por categoría desde la api.gyphi.com
//
// Inputs:      categoria
// Outputs:     Muestra en el navegador imágenes gif relacionadas a una categoría dada
//
// called from: index.js
// call to:     AgregarCategoria, gifGrid.
//
// Proccess:    Utiliza la función getGifs() para guardar las imagenes obtenidas de la api
//              en la variable de estado images[] y procesa cada una de las imágenes 
//              llamando al componente <GifGridItem /> para que lo muestre en el navegador
// ---------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({categoriaInicial}) => {
    
    if (!categoriaInicial) categoriaInicial = '';  
    const [categorias, setCategorias] = useState([categoriaInicial]);

    return (
        <div className="container">
            <h2>GifExpertApp</h2>
            <AgregarCategoria setCategorias={ setCategorias } />
            <hr />

            <ol>
                {
                    categorias.map(item => 
                        <GifGrid 
                            key={item}
                            categoria={item}
                        />
                    )
                }
            </ol>
        </div>
    )
}
