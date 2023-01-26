export const getGifs = async( category ) => {//la funcion se saca del componente ya que no es necesario, se podria dejar hasta en otro archivo, buena practi evita el reprocesamiento

    const url = `https://api.giphy.com/v1/gifs/search?api_key=RP1XFO8stt4ssb32mZoPelCXWAxI4IJv&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({ //igual se quito el return y se selecciona los datos con los que se va a trabajar
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs)
    return gifs
}