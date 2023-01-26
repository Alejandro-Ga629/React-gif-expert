import { useState } from 'react'

export const AddCategory = ( {onNewCategory} ) => { //no olvidar poner las props desestructuradas, cuando se necesiten

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) =>{
        setInputValue( event.target.value );

    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;//validacion de cantidad de caracteres en el texbox
        //console.log(inputValue);
        //setCategories( categories => [ inputValue, ...categories ] ); //usando el props
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    
    return (
      //<form onSubmit={ (event) => onSubmit(event) } > es lo mismo que abajo, solo que abajo esta mas facil de leer
        <form onSubmit = { onSubmit }>

            <input
            type = "text"
            placeholder = "Buscar gifs"
            value = {inputValue}
            onChange = {(event) => onInputChange(event) }
            />

        </form>
        
  )
};
