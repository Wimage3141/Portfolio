import { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei"
import planeScene from '../assets/3d/plane.glb'

const Plane = ({ isRotating, ...props}) => {
  const { scene, animations } = useGLTF(planeScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if(isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane