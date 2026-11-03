import { Heart } from "lucide-react";
import { useState } from "react";

function HeartLike() {
  const [isRed, setIsRed] = useState(false);

  return (
    <button
      onClick={() => setIsRed(!isRed)}
      className="border border-line rounded-full size-6 flex items-center justify-center"
    >
      <Heart size={14} className={`stroke-1 ${isRed ? "fill-red-600 text-red-600" : ""}`} />
    </button>
  );
}

export default HeartLike;
