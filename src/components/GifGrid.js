
// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // useEffect(() => {
    //     // getGifs();
    //     getGifs(category)
    //         .then(setImages);
    //         // .then(imgs => setImages(imgs));
    // }, [category]) // explicación video 78 min 6.

    // const getGifs = async() => { // antes estaba aquí la función

    //getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {/* {loading ? 'cargando...' : 'Data cargada'} */}
            {loading && <p className='animate__animated animate__flash'>Loading</p>}   {/* Si loading es true, muestra el parrafo */}

            <div className='card-grid'>
                {/* <li>Item</li> */}
                {/* {
                    images.map(img => (  // se puede deses. ej: img -> ({id, title}) =>
                        <li key={img.id}> {img.title} </li>
                    ))
                } */}
                {
                    // images.map(img => (
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            // img={img}
                            {...img} // video 76. min 7:00 explicación. Se envia cada propiedad de la imágen como una prop. independiente en este caso:(id, title, url)
                        />
                    ))
                }
            </div>
        </>
    )
}


