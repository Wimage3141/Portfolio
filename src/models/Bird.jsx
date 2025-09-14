import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'

const Bird = () => {
  const { scene, animation } = useGLTF(birdScene);
  return (
    <mesh position={[-10, -30, -40]} scale={[0.02, 0.02, 0.02]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird