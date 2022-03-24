
export const getGifs = async(category) => {
    // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=2YSya54hvz4HdnK13kpya4Lo1MvdBL7c';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2YSya54hvz4HdnK13kpya4Lo1MvdBL7c`; // rellena los espacios con % + etc
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // ? para asegurar que vienen las imágenes
        }
    })

    console.log(gifs);
    // setImages(gifs); // Ya no es un componente react

    return gifs; // ahora devuelve una promesa que resuelve el gif
}

