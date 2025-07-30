import './App.css'
import HelloWorld from './01.fundamentos/helloworld'
import Expresion from './01.fundamentos/expresiones'
import { FuncionalProps } from './01.fundamentos/funcionalProps'
import { Contador } from './01.fundamentos/state'
import { DefaultComponent, UnionComponent } from './02.PropsComposicion/props'
import { Card, ComponenteSimple, List } from './02.PropsComposicion/reactNode'
import { RenderComponentFunction } from './02.PropsComposicion/composicion'

function App() {

  const returnData=()=>(<p>Prueba de Return</p>)

  return (
    <>
      {/* <HelloWorld></HelloWorld>
      <Expresion></Expresion>
      <FuncionalProps name='Jose Alberto'></FuncionalProps> */}

      {/* <Contador></Contador>
      <DefaultComponent title='Tíulo de Prueba'></DefaultComponent>
      <UnionComponent status='success'></UnionComponent> */}

      {/* <ComponenteSimple>
        <p>Lo que se va a inyectar en Children</p>
      </ComponenteSimple>

      <Card header={
        <h1>Encabezado de la página</h1>
      }>
        <h4>Contenido de la Tarjetda</h4>
      </Card>

      <List items={[<span>Item1</span>, <span>Item2</span>, <span>Item3</span>]}></List> */}

      <RenderComponentFunction title={'Hola'} renderContent={returnData}></RenderComponentFunction>
    </>
  )
}

export default App
