// ---------------------------------------------------------------------------------------
// Custom hook: useFetchGifs.js  
// ---------------------------------------------------------------------------------------
// Description: Obtiene la data llamando a getGifs e indica cuándo ha sido cargada.
//              
// inputs:      Categoria actual del componente GifGrid
// Outputs:     Un objeto con el arreglo de imágenes y el estado de la carga.
// 
// called from: <GifGrid />
// call to:     getGifs(), setTimeout(), setState(), useState(), useEffect()
//
// Proccess:    Cuando se carga el componente por primera vez lanza la petición para obte-
//              ner los gifs y los coloca en las imagenes, indicando cuando está cargando
//              y cuando termina la carga. 
// ---------------------------------------------------------------------------------------

import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect( () => {
        getGifs( categoria )
            .then ( imgs => {
                // setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false   
                    })
                // }, 3000);
            })

    }, [ categoria ]);



    return state;

}
