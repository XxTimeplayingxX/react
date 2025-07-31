import { useEffect, useState, type FC } from "react";

export const TitleEffect : FC = () =>{
    const [count, setCount] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)


    useEffect(()=>{
        document.title = `Click ${count}`
    }, [count])

    //Arreglo de dependecias
    //Multiples de estado, si se actualiza uno, se ejecuta el useEffect


    /*
    Si no tiene dependencias, solo se ejecuta una vez cuando se renderiza (Como en NgOnInit en Angular)
    
    Si tiene un arreglo de dependencias, se parece como el NgOnChange
    */
    return (
        <button onClick={()=> setCount(count+1)}>Clicks {count}</button>
    )
}