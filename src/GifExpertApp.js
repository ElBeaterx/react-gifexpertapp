import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; // Al ser constante no cambia
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Shield Hero']); // Las 2 sirven
    //     setCategories(cats => [...cats, 'Shield Hero']);  // Se pueden cambiar de posición para que se agregue en primera pos.
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map(category => (    // Se puede dejar así, y envuelto en () para que sea más facil de leer
                        // <li key={category}> {category} </li>
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

