
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/gltfloader'
import {DRACOLoader} from 'three/examples/jsm/loaders/dracoloader'

export default function Model() {
    const animation = useLoader(
        GLTFLoader,
        './resources/animations/Animations.glb',
        (loader) => {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('./decoder/')
            loader.setDRACOLoader(dracoLoader)
        }
    )

    console.log(animation);

    const model = useLoader(
        GLTFLoader,
        './resources/models/AvatarRobe.005.glb'
    )

    return <>
        <primitive object={model.scene} />
    </>

}