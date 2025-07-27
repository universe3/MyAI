import React from "react";
import { useState } from "react";
import { Sparkles, Eraser, FileText } from "lucide-react";

const ReviewResume = () => {
  const [setInput] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // handle file upload logic here
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex  items-start flex-wrap gap-4 text-slate-700">
      {/* Left column */}
      <form
        onSubmit={onSubmitHandler}
        className="flex-1 max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3 ">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <p className=" mt-6 text-sm font-medium">Upload Resume</p>

        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="application/pdf"
          className="w-full p-2 px-3 mt-2 outline-none text-sm border border-gray-300 rounded-md text-gray-600"
          required
        />

        <p className="mt-1 text-xs text-gray-500 font-light ">
          Supports PDF format only
        </p>

        <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white rounded-lg cursor-pointer">
          <FileText className="w-5" />
          Review Resume
        </button>
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col  border border-gray-200 max-h-[600px]">
        <div className="flex items-center gap-3 mb-3">
          <FileText className="w-5 h-5 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileText className="w-9 h-9" />
            <p>Upload a PDF to review its content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
