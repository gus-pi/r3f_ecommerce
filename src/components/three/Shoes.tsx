import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import type { CameraControls } from '@react-three/drei';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useEffect, useRef, type JSX, type RefObject } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { selectedColorState, selectedMeshState } from '../../atoms/Atoms';
import Constants from '../../constants';
import { useAtom } from 'jotai';

type GLTFAction = THREE.AnimationClip;

type GLTFResult = GLTF & {
    nodes: {
        ['Insole_Right']: THREE.Mesh;
        ['Insole_Left']: THREE.Mesh;
        ['Lining_Right']: THREE.Mesh;
        ['Outsole_Back_Right']: THREE.Mesh;
        ['Outsole_Back_Left']: THREE.Mesh;
        ['Outsole_Bottom_Right']: THREE.Mesh;
        ['outsole-bottom-l']: THREE.Mesh;
        ['Outsole_Front_Right']: THREE.Mesh;
        ['Outsole_Front_Left']: THREE.Mesh;
        ['Outsole_Side_Right']: THREE.Mesh;
        ['Outsole_Side_Left']: THREE.Mesh;
        ['Seam_Line_Right']: THREE.Mesh;
        ['Seam_Line_Left']: THREE.Mesh;
        Back_Label_Right: THREE.Mesh;
        Back_Label_Left: THREE.Mesh;
        Foxing__Lining_Back_Right: THREE.Mesh;
        Foxing__Lining_Back_Left: THREE.Mesh;
        Foxing__Lining_Right: THREE.Mesh;
        Foxing__Lining_Left: THREE.Mesh;
        Lace__Dubrae_Right: THREE.Mesh;
        Lace__Dubrae_Left: THREE.Mesh;
        Midsole_Right: THREE.Mesh;
        Midsole_Left: THREE.Mesh;
        Plane006: THREE.Mesh;
        Plane045: THREE.Mesh;
        Plane007: THREE.Mesh;
        Tip_Left_Right_: THREE.Mesh;
        Tip_Right_Left_: THREE.Mesh;
        Tip_Right: THREE.Mesh;
        Tip_Left: THREE.Mesh;
        Tip_Right_Right_: THREE.Mesh;
        Tip_Left_Left_: THREE.Mesh;
        Tongue_Right: THREE.Mesh;
        Tongue_Left: THREE.Mesh;
        Vamp_Right: THREE.Mesh;
        Vamp_Left: THREE.Mesh;
        ['Lining_Left']: THREE.Mesh;
        Plane046: THREE.Mesh;
    };
    materials: {
        ['govde.002']: THREE.MeshStandardMaterial;
        ['bacık.002']: THREE.MeshStandardMaterial;
        ['bacik.002']: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

type ShoesProps = Omit<JSX.IntrinsicElements['group'], 'onClick'> & {
    cameraControlsRef: RefObject<CameraControls>;
};

export function Shoes({ cameraControlsRef, ...props }: ShoesProps) {
    const { nodes, materials } = useGLTF('/models/custom.glb') as unknown as GLTFResult;
    const { raycaster, scene } = useThree();

    const [selectedColorIndex, _] = useAtom(selectedColorState);
    const [selectedMeshName, setSelectedMeshName] = useAtom(selectedMeshState);

    const groupRef = useRef<THREE.Group>(null!);
    // const rightRef = useRef<THREE.Group>(null!);
    const leftRef = useRef<THREE.Group>(null!);
    const isFittingRef = useRef(false);

    useEffect(() => {
        const controls = cameraControlsRef.current;
        const onControl = () => {
            isFittingRef.current = true;
        };
        const onSleep = () => {
            isFittingRef.current = false;
        };
        controls.addEventListener('control', onControl);
        controls.addEventListener('sleep', onSleep);
        return () => {
            controls.removeEventListener('control', onControl);
            controls.removeEventListener('sleep', onSleep);
        };
    }, [cameraControlsRef]);

    useEffect(() => {
        if (selectedMeshName !== '') {
            const obj = scene.getObjectByName(selectedMeshName) as THREE.Mesh;
            const mat = obj.material as THREE.MeshStandardMaterial;
            const color = Constants.COLOR_ARR[selectedColorIndex].color;
            mat.color = new THREE.Color(color);
        }
    }, [selectedColorIndex]);

    useFrame((_, delta) => {
        // rightRef.current.rotation.y = THREE.MathUtils.degToRad(-60);
        leftRef.current.rotation.x = THREE.MathUtils.degToRad(15);
        leftRef.current.rotation.y = THREE.MathUtils.degToRad(0);
        leftRef.current.rotation.z = THREE.MathUtils.degToRad(20);
        leftRef.current.position.x = 0;
        leftRef.current.position.z = 0.15;
        leftRef.current.position.y = 0.2;

        // if (!isFittingRef.current) {
        //     groupRef.current.rotation.y += delta * 0.5;
        // }
    });

    const shoesClick = () => {
        const intersects = raycaster.intersectObject(groupRef.current, true);
        if (intersects.length > 0) {
            const firstObj = intersects[0].object as THREE.Mesh;
            setSelectedMeshName(firstObj.name);
            const firstMat = (firstObj.material as THREE.MeshStandardMaterial).clone();
            const cloneMat = firstMat.clone();

            firstObj.material = cloneMat;
            const mat = firstObj.material as THREE.MeshStandardMaterial;
            const color = Constants.COLOR_ARR[selectedColorIndex].color;
            mat.color = new THREE.Color(color);

            mat.emissive = new THREE.Color('#8a3200');
            setTimeout(() => {
                mat.emissive = new THREE.Color('black');
            }, 200);
            cameraControlsRef.current.fitToBox(firstObj, true);
        }
    };

    return (
        <group {...props} ref={groupRef} dispose={null} onClick={shoesClick}>
            <group name="Scene">
                <group name="Left" ref={leftRef}>
                    <mesh
                        name="Insole_Left"
                        geometry={nodes['Insole_Left'].geometry}
                        material={materials['govde.002']}
                        position={[0.175, 0.026, 0.144]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Outsole_Back_Left"
                        geometry={nodes['Outsole_Back_Left'].geometry}
                        material={materials['bacık.002']}
                        position={[0.177, 0.029, 0.109]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="outsole-bottom-l"
                        geometry={nodes['outsole-bottom-l'].geometry}
                        material={materials['bacık.002']}
                        position={[0.175, 0.013, 0.144]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Outsole_Front_Left"
                        geometry={nodes['Outsole_Front_Left'].geometry}
                        material={materials['bacık.002']}
                        position={[-0.197, 0.03, 0.464]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Outsole_Side_Left"
                        geometry={nodes['Outsole_Side_Left'].geometry}
                        material={materials['bacık.002']}
                        position={[0.22, 0.011, 0.114]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Seam_Line_Left"
                        geometry={nodes['Seam_Line_Left'].geometry}
                        material={materials['bacık.002']}
                        position={[0.152, 0.087, 0.176]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Back_Label_Left"
                        geometry={nodes.Back_Label_Left.geometry}
                        material={materials['govde.002']}
                        position={[0.478, 0.342, -0.173]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Foxing__Lining_Back_Left"
                        geometry={nodes.Foxing__Lining_Back_Left.geometry}
                        material={materials['govde.002']}
                        position={[0.367, 0.214, -0.05]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Foxing__Lining_Left"
                        geometry={nodes.Foxing__Lining_Left.geometry}
                        material={materials['govde.002']}
                        position={[0.266, 0.198, 0.042]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Lace__Dubrae_Left"
                        geometry={nodes.Lace__Dubrae_Left.geometry}
                        material={materials['bacik.002']}
                        position={[-0.001, 0.288, 0.333]}
                        rotation={[Math.PI / 2, 0, 0.836]}
                        scale={[-0.025, 0.025, 0.025]}
                    />

                    <mesh
                        name="Midsole_Left"
                        geometry={nodes.Midsole_Left.geometry}
                        material={materials['bacık.002']}
                        position={[0.152, 0.084, 0.176]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Plane045"
                        geometry={nodes.Plane045.geometry}
                        material={materials['bacik.002']}
                        position={[0.203, 0.302, 0.279]}
                        rotation={[-0.439, 0.415, 0.18]}
                        scale={[-0.262, 0.257, 0.277]}
                    />

                    <mesh
                        name="Tip_Right_Left_"
                        geometry={nodes.Tip_Right_Left_.geometry}
                        material={materials['govde.002']}
                        position={[-0.018, 0.185, 0.156]}
                        rotation={[-Math.PI, -0.603, -Math.PI]}
                        scale={[0.256, 0.254, 0.259]}
                    />

                    <mesh
                        name="Tip_Left"
                        geometry={nodes.Tip_Left.geometry}
                        material={materials['govde.002']}
                        position={[-0.05, 0.16, 0.376]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Tip_Left_Left_"
                        geometry={nodes.Tip_Left_Left_.geometry}
                        material={materials['govde.002']}
                        position={[0.176, 0.185, 0.371]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />

                    <mesh
                        name="Tongue_Left"
                        geometry={nodes.Tongue_Left.geometry}
                        material={materials['bacik.002']}
                        position={[0.179, 0.315, 0.17]}
                        rotation={[0, 0.886, 0]}
                        scale={[-0.257, 0.254, 0.262]}
                    />

                    <mesh
                        name="Vamp_Left"
                        geometry={nodes.Vamp_Left.geometry}
                        material={materials['govde.002']}
                        position={[0.18, -0.015, 0.228]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />
                    <mesh
                        name="Lining_Left"
                        geometry={nodes['Lining_Left'].geometry}
                        material={materials['govde.002']}
                        position={[0.266, 0.189, 0.042]}
                        rotation={[0, 0.735, 0]}
                        scale={[-0.254, 0.254, 0.254]}
                    />
                    <mesh
                        name="Plane046"
                        geometry={nodes.Plane046.geometry}
                        material={materials['bacik.002']}
                        position={[0.07, 0.302, 0.132]}
                        rotation={[-2.105, -0.917, -2.191]}
                        scale={[0.276, 0.259, 0.304]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/models/custom.glb');
