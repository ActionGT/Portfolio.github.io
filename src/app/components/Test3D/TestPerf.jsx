import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'

// function Box(props) {
//   const meshRef = useRef(null)
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

export default function TestPerf() {
  return (
      <div className='pt-[500px] pl-[800px] '>
        <iframe className='h-[800px] w-[1000px]' loading="lazy" src="https://playcanv.as/b/8745cf5a"></iframe>
      </div>
    // <Canvas style={{ height: "100vh" }}>
    //   <ambientLight intensity={Math.PI / 2} />
    //   <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    //   <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    //   <Box position={[-1.2, 0, 0]} />
    //   <Box position={[1.2, 0, 0]} />
    // </Canvas>
  )
}