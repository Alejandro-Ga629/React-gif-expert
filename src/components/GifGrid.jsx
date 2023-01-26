
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {//la ejecucion de la funcion nunca va en el componente solo se llama aqui

 const { images, isLoading } = useFetchGifs( category );
 
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }//esparciendo todas las propiedades de image, de esta forma se puede obtener
                        />
                    ))
                
                }

            </div>

        </>
    )
};
