import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
        <div className="relative h-32 w-32">
          {/* Spinner Circle */}
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-purple-500 border-solid" />
          
          {/* Centered Static Text */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">
            {Math.floor(progress)}%
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;