import React from 'react';

export const GifGridItem = ({title, url}) => {
// ---------------------------------------------------------------------------------------
// Descripción: Muestra en el navegador la imagen con su título.
// Llamado por: <GifGrid />
// Entrada:     Título y url de una imagen.
// Salida:      Código html a renderizar en el navegador.
// Proceso:     Aplica estilos y prepara el código html
// ---------------------------------------------------------------------------------------
    
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
