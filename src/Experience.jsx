import './Experience.css'

import {Html, MeshReflectorMaterial, OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Suspense} from 'react'

import Avatar from './Avatar'

const Loading = <Html><div>LOADING...</div></Html>;

export default function Experience() {

    return <>

        <Perf position='top-left' scale={false} />

        <OrbitControls dampingFactor={0.05} makeDefault target={[0, 1, 0]} />

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* Floor */}
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

        {/* Avatar */}
        <Suspense fallback={Loading}>
            <Avatar />
        </Suspense>
    </>
}