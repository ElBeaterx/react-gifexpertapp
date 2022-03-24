
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        if (inputValue.trim().length > 2) {  // mínimo 2 letras para buscar
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    
    return (       // Al tener el form que contiene todo, ya no es necesario el <> </>
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

