import React from "react";
import { Sparkles, Eraser, Scissors } from "lucide-react";
import { useState } from "react";

const RemoveObjects = () => {
  const [setInput] = useState("");
  const [object, setObject] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex  items-start flex-wrap gap-4 text-slate-700">
      {/* Left column */}
      <form
        onSubmit={onSubmitHandler}
        className="flex-1 max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Object Removal</h1>
        </div>

        <p className=" mt-6 text-sm font-medium">Upload Image</p>

        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm border border-gray-300 rounded-md text-gray-600"
          required
        />
        <p className=" mt-6 text-sm font-medium">
          Describe Object name to remove
        </p>

        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm border border-gray-300 rounded-md"
          placeholder="e.g., watch or spoon, only single object name"
          required
        />

        <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white rounded-lg cursor-pointer">
          <Scissors className="w-5" />
          Remove objects
        </button>
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col  border border-gray-200 min-h-96">
        <div className="flex items-center gap-3 mb-3">
          <Scissors className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Scissors className="w-9 h-9" />
            <p>Upload an image to remove its objects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObjects;
