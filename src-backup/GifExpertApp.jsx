import React, {useState} from 'react';

export const GifExpertApp = () => {

    const categoriasIniciales = ['A','B','C','D'];
    const [categorias, setCategorias] = useState(categoriasIniciales);

    const handleAdd = () => {
        setCategorias(item => ['E', ...item]);
    };

    return (
        <div className="container">
            <h2 className="mx-auto">GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd} className="btn btn-outline-success">Agregar</button>

            <ol>
                {
                    categorias.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
        </div>
    )
}
