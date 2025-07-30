import { useState, type FC } from "react";


export const Contador: FC = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Incrementar {count}</button>
        </div>
    )
}

export const Toggle : FC = () =>{
    let estado:Boolean = false;
    const [habilitado, setHabilitado] = useState<boolean>(false)
return (
    <div>
        <button onClick={()=> setHabilitado}>
            
        </button>
    </div>
)
}