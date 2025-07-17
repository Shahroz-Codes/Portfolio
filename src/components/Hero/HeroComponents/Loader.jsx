import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-purple-500 border-solid">{progress}% Loaded</div>
      </div>
    </Html>
  );
};

export default Loader;
