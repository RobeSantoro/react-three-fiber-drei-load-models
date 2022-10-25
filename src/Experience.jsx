import './Experience.css'

import {MeshReflectorMaterial, OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'

export default function Experience() {

    return <>

        <Perf position='top-left' />

        <OrbitControls dampingFactor={0.05} makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <mesh position-y={-1} scale={20} rotation={[-Math.PI * .5, 0, 0]}>
            <planeGeometry />
            {/* <meshBasicMaterial color={ 'green' } /> */}
            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color='white'
            />
        </mesh>

    </>
}