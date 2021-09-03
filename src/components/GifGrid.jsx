// ---------------------------------------------------------------------------------------
// Componente   GifGrid.jsx  
// ---------------------------------------------------------------------------------------
// Description: muestra las imagenes de la categoría, indicando el estado de la descarga.
//
// Inputs:      {categoria}
// Outputs:     {images} con las magenes y {loading} con el estado de la carga.
//
// Called from: <GifExpertApp />
// Call to:     hook: useFetchGifs(), <GifGridItem />
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
