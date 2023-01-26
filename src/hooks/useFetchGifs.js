//un hook es una funcion que regresa algo, nada mas que eso
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);

    }

    useEffect( ()=>{//hook
        getImages();
        //getGifs(category);
    }, [] )

    return{
        images, //images: images esto es lo mismo
        isLoading //isLoading: false

    }
    
}
