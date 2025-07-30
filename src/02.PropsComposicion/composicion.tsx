import type { FC, ReactNode } from "react";

interface Composition{
    title:String,
    children: ReactNode //Se puede usar el ANY pero en la mayoría de los casos es mejor colocar la interfaz
}

export const CompositionComponent : FC <Composition> = ({title, children})=>{
    return (
        <div>
            <h4>{title}</h4>
            <div>{children}</div>
        </div>
    )
}

///////////////////////////////////////////////////////////////

interface RenderProps{
    title:String;
    renderContent:()=> ReactNode
}

export const RenderComponentFunction:FC<RenderProps> = ({title, renderContent})=>{
    return(
        <div>
            <h4>{title}</h4>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}
