//RP1XFO8stt4ssb32mZoPelCXWAxI4IJv API key!!
//los componentes deben ser facil de leer y de mantener
import { useState } from 'react'; //siempre se debe importar el useStates
import { AddCategory, GifGrid } from './components'; //no se pone el index.js por que va por defecto


export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch' ] );//Esto es un hook!!

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;
        //console.log( newCategory )
        setCategories( [ newCategory, ...categories ] )
        //setCategories(['Valorant',...categories] ); //lo agrega al inicio!!
        //setcategories ([...categories, 'Valorant']);//no usar el push es mejor el operador spread ...

    }

    return (
        <>
         {/* Titulo */}

         <h1>GifExpertApp</h1>

         {/* Imput */}
         <AddCategory 
         //setCategories = { setCategories }
         onNewCategory = { event => onAddCategory( event) } 
         />
         
         {/* Listado de Gif */}
         
            { categories.map( category => //se quieto el return para optimizar codigo
                 <GifGrid 
                    key = { category }
                    category = { category } />
            )   
            
            }

            {/* Gif Item */}
        
        </>
    )


};