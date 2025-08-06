//Programación funcional

import { useReducer, type FC } from "react"

interface FormState{
    name: string
    age:number
}

type Action = {type:'setName'; payload:string} | {type:'SetAge'; payload:number}

const reducer = (state: FormState, action: Action)=>{
    switch(action.type){
        case 'setName':
            return {...state, name:action.payload}
        case 'SetAge':
            return {...state, age:action.payload}
        default:
            return state
    }
}

export const FormWithReducer: FC = ()=>{
    const [formData, dispatch]= useReducer(reducer, {name:'', age:0})

    return (
        <form action="">
            <input type="text"
            value={formData.name}
            onChange={(e)=> dispatch({type:'setName', payload: e.target.value})} 
            placeholder="Nombre"/>

            <input type="number"
            value={formData.age}
            onChange={(e)=> dispatch({type:'SetAge', payload: Number(e.target.value)})}
            placeholder="Edad" />

            <h3>{JSON.stringify(formData)}</h3>
        </form>
    )
}

