// ---------------------------------------------------------------------------------------
// Componente   GifGrid.jsx  
// ---------------------------------------------------------------------------------------
// Description: Recibe la categoría y obtiene las imagenes relacionadas. Indica el estado
//              de la carga y al finalizar muestra las imagenes en el navegador. 
//
// Inputs:      { categoria }
// Outputs:     { data: images, loading } Lista de imagenes y estado de la carga.
//
// Called from: GifExpertApp (component)
// Call to:     useFetchGifs (custom hook), GifGridItem (component)
//
// Proccess:    - Obtiene un arreglo de datos de imágenes llamando a useFetchGifs() 
//              - Muestra el título de la categoría y el estado de la carga.
//              - Recorre el arreglo de datos y muestra cada imagen con su título 
//                llamando al componente GifGridItem.
// ---------------------------------------------------------------------------------------
    
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {
    const { data: images, loading } = useFetchGifs( categoria );

    return (
        <>
            <h3>{ categoria }</h3>

            { loading && <p>loading...</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
