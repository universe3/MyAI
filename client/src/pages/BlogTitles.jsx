import { Hash, Sparkles } from "lucide-react";
import React from "react";
import { useState } from "react";

const BlogTitles = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Travel",
    "Education",
    "Food",
  ];

  const [selectedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");
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
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        <p className=" mt-6 text-sm font-medium">Keyword</p>

        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm border border-gray-300 rounded-md"
          placeholder="The future of artificial intelligence is ..."
          required
        />

        <p className="mt-4 text-sm font-medium">Categories</p>

        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategories.map((item) => (
            <span
              key={item}
              className={`cursor-pointer px-4 py-1 border rounded-full text-xs ${
                selectedCategory === item
                  ? "bg-purple-50 text-purple-700"
                  : "border-gray-500 text-gray-300"
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white rounded-lg cursor-pointer">
          <Hash className="w-5" />
          Generate Title
        </button>
      </form>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col  border border-gray-200 min-h-96">
        <div className="flex items-center gap-3 mb-3">
          <Hash className="w-5 h-5 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">Generated Title</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-9 h-9" />
            <p>Enter a Topic and Click "Generate Title" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
