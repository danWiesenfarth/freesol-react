import { Canvas } from '@react-three/fiber';
import { PortraitPreview } from './PortraitPreview';
import { CameraControls } from '@react-three/drei';

export default function ThreePreview() {
  return (
    <div className='h-full w-full'>
      <Canvas>
        <ambientLight intensity={1} />
        <CameraControls makeDefault />
        <PortraitPreview />
      </Canvas>
    </div>
  );
}
