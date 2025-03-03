import React from "react";
import { FaStar } from "react-icons/fa";

const StarProgress = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex gap-1 justify-center items-center">
      {[...Array(maxRating)].map((_, i) => {
        const starFill = Math.min(Math.max(rating - i, 0), 1); // Controls star fill level (0 to 1)

        return (
          <div key={i} className="relative text-2xl w-6 h-6">
            {/* Empty Star */}
            <FaStar className="text-transparent stroke-yellow-400 stroke-[10]" />

            {/* Filled Star - Clipped */}
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${starFill * 100}%` }}
            >
              <FaStar className="text-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarProgress;
