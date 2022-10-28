import './Experience.css'

import {MeshReflectorMaterial, OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/gltfloader'

export default function Experience() {

    const model = useLoader(GLTFLoader, './resources/models/AvatarRobe.005.glb')
    console.log(model)
    return <>

        <Perf position='top-left' scale={false} />

        <OrbitControls dampingFactor={0.05} makeDefault target={[0,1,0]} />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position-y={0} scale={20} rotation={[-Math.PI * .5, 0, 0]}>
            <planeGeometry />
            {/* <meshBasicMaterial color={ 'white' } /> */}
            <MeshReflectorMaterial
                resolution={512}
                blur={[500, 500]}
                mixBlur={1}
                mirror={0.5}
                color='white'
            />
        </mesh>

        <primitive object={model.scene} />

    </>
}