import './App.css'
import { Canvas } from '@react-three/fiber'
import  {OrbitControls} from '@react-three/drei';

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]}/>
      <axesHelper args={[5]}/>
      <mesh position={[0, 0, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"blue"}/>
      </mesh>
      <OrbitControls />
    </Canvas>
  )
}

export default App
