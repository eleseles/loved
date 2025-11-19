import React from 'react';

const ToolHeader: React.FC = () => {
  return (
    <div className="py-8 border-b border-zinc-200 mb-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-3 tracking-wide">
          Portrait Generator
        </h1>
        <p className="text-zinc-500 text-base font-light max-w-2xl mx-auto">
          Upload your photos below to create a unified masterpiece.
        </p>
        <div className="flex items-center justify-center gap-8 mt-6 text-xs uppercase tracking-widest text-zinc-400">
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-zinc-900 rounded-full mr-2"></span>Upload</span>
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mr-2"></span>Style</span>
          <span className="flex items-center"><span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mr-2"></span>Generate</span>
        </div>
      </div>
    </div>
  );
};

export default ToolHeader;