import {Clone, useGLTF} from "@react-three/drei"

export default function Avatar() {

    const animation = useGLTF('./resources/animations/Animations.glb')
    console.log(animation);

    const model = useGLTF('./resources/models/AvatarRobe.005.glb')

    return <>
        <primitive object={model.scene} position-x={-4} />
        <Clone deep={true} object={model.scene} position-x={0} />
        <Clone object={model.scene} position-x={4} />
    </>

}

useGLTF.preload('./resources/models/AvatarRobe.005.glb')