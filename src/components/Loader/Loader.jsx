import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <HashLoader
        color="#06b6d4"
        loading={true}
        size={80}
        speedMultiplier={1.5}
      />
    </div>
  );
}
