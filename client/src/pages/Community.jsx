import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { dummyPublishedCreationData } from "../assets/assets";
import { Heart } from "lucide-react";

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setCreations(dummyPublishedCreationData); // ✅ Use the correct dataset
    }
  }, [user]);

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h2 className="text-xl font-semibold">Creations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
        {creations.map((creation, index) => (
          <div key={index} className="relative group w-full">
            <img
              src={creation.content}
              alt={creation.prompt || "Generated Image"}
              className="w-full h-60 object-cover rounded-lg"
            />

            <div className="absolute inset-0 p-4 rounded-lg flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <p className="text-sm truncate">{creation.prompt}</p>
              <div className="flex gap-1 items-center">
                <p>{creation.likes.length}</p>
                <Heart
                  className={`w-5 h-5 hover:scale-110 cursor-pointer ${
                    creation.likes.includes(user?.id)
                      ? "fill-red-500 text-red-600"
                      : "text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
