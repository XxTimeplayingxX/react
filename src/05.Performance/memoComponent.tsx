//Mejorar el performance en React

import { memo, useState, type FC } from "react";

const SubComponent: FC<{value: number}>=memo(({value})=>{
    console.log('Se renderzó el componente SubComponent')
    return <h3>{value}</h3>
})

export const ComponentePadre:FC=()=>{
    const[count, setCount]=useState(0)

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Incrementar Padre</button>
            <SubComponent value={10}></SubComponent>
        </div>
    )
}

