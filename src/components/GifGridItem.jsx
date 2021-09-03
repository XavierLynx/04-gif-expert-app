// ---------------------------------------------------------------------------------------
// Componente:  GifGridItem
// ---------------------------------------------------------------------------------------
// Descripción: Muestra en el navegador la imagen con su título.
//
// called from: <GifGrid />
//
// Inputs:      {title, url} Título y url de una imagen.
// Outputs:     Código html a renderizar en el navegador.
//
// Proccess:    Aplica estilos y prepara el código html
// ---------------------------------------------------------------------------------------

import React from 'react';

export const GifGridItem = ({title, url}) => {
    
    return (
        <div className="card  animate__animated animate__rotateInDownLeft">
            <img 
                src={url} 
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}
