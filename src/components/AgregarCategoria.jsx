import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AgregarCategoria = ({setCategorias}) => {
// ---------------------------------------------------------------------------------------
// Descripción: Actaliza la lista de categorías que muestra la aplicación
// exportado a: GifExpertApp
// Entrada:     Referencia a la función setCategorias del componente GifExpertApp
// Salida:      Cambia el estado del componente GifExpertApp agregando una nueva categoría
// ---------------------------------------------------------------------------------------

    const [valorEntrado, setValorEntrado] = useState('');

    const handleInputChange = (e) => {
        setValorEntrado(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (valorEntrado.trim().length > 1) {
            setCategorias(categorias => ([valorEntrado, ...categorias]));
            setValorEntrado('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="input-group mb-3">
                <span 
                    className="input-group-text" 
                    id="basic-addon3">
                        Categoría
                </span>

                <input 
                    type="text" 
                    className="form-control" 
                    id="basic-url" 
                    aria-describedby="basic-addon3"

                    value={ valorEntrado }
                    onChange={ handleInputChange }
                />
            </div>
        </form>
    )
};

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

