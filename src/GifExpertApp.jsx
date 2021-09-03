// ---------------------------------------------------------------------------------------
// Componente: GifExpertApp.jsx
// ---------------------------------------------------------------------------------------
// Description: Muestra imágenes gifs de la api.gyphi.com relaionadas a la categoría dada. 
//
// Inputs:      categoriaInicial (opcional).
// Outputs:     Muestra las imágenes obtenidas desde api.gyphi.com
//
// called from: index.js
// call to:     AgregarCategoria, gifGrid.
//
// Proccess:    Utiliza <AgregarCategoria /> para actualizar la lista de categorías.
//               
//              
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
