import type { FC } from "react"

 interface DefaultProps{
    title?:string
 }

 export const DefaultComponent:FC<DefaultProps>=({title})=>{
    return(
        <p>{title}</p>
    )
 }

 interface UnionProps{
    status: 'error' | 'success'
 }

export const UnionComponent : FC<UnionProps>=({status})=>{
    return (
        <p>{status === 'success' ? "Operación Exitosa": "Ocurrieron Errores"}</p>
    )
}
