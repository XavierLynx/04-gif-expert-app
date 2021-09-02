// ---------------------------------------------------------------------------------------
// Helper function: getGifs.js
// ---------------------------------------------------------------------------------------
// Description: Obtiene las imagenes gifs desde la api.giphy.com, según la categoría.
//
// Inputs:      categoria
// Outputs:     Lista de imagenes gifs correspondientes a la categoría
//
// called from: useFetchGifs.js
//
// Proccess:    Utiliza la función getGifs() para guardar las imagenes obtenidas de la api
//              en la variable de estado images[] y procesa cada una de las imágenes 
//              llamando al componente <GifGridItem /> para que lo muestre en el navegador
// ---------------------------------------------------------------------------------------
   
export const getGifs = async( categoria ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=3&offset=0&rating=g&lang=en&api_key=FwV3tAUy0ZuZd6IXDuFAoh4g2dATamZN`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}