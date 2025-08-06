//Programación orientada a Funciones

import { useReducer, type FC } from "react";

type Action = {
    type: 'inc'
} | {type: 'dec'}

const reducer = (state: number, action:Action):number=>{
    switch(action.type){
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1
        default:
            return state
    }
}

export const CountReducer: FC=()=>{
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <button onClick={()=> dispatch({type:'inc'})}>+</button>
            <span>{count}</span>
            <button onClick={()=>dispatch({type:'dec'})}>-</button>
        </div>
    )
}

