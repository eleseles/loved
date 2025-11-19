import React, { useCallback } from 'react';
import { UploadIcon, XIcon } from './Icons';
import { UploadedFile } from '../types';

interface ImageUploaderProps {
  label: string;
  subLabel?: string;
  files: UploadedFile[];
  onFilesChange: (files: UploadedFile[]) => void;
  multiple?: boolean;
  accept?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  subLabel,
  files,
  onFilesChange,
  multiple = false,
  accept = "image/*"
}) => {
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedFile[] = Array.from(e.target.files).map((file: File) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        previewUrl: URL.createObjectURL(file)
      }));

      if (multiple) {
        onFilesChange([...files, ...newFiles]);
      } else {
        // Replace if single mode
        onFilesChange(newFiles);
      }
    }
  }, [files, multiple, onFilesChange]);

  const removeFile = useCallback((idToRemove: string) => {
    onFilesChange(files.filter(f => f.id !== idToRemove));
  }, [files, onFilesChange]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-zinc-800 mb-1">
        {label}
      </label>
      {subLabel && (
        <p className="text-xs text-zinc-500 mb-3">{subLabel}</p>
      )}

      {/* Upload Box - Light Theme */}
      <div className="relative group">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div className="border border-dashed border-zinc-300 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-400 transition-colors rounded-lg p-6 flex flex-col items-center justify-center text-center min-h-[120px]">
          <UploadIcon className="w-8 h-8 text-zinc-400 mb-2 group-hover:text-zinc-600 transition-colors" />
          <p className="text-sm text-zinc-500 font-light">
            <span className="font-medium text-zinc-800">Click to upload</span> or drag and drop
          </p>
        </div>
      </div>

      {/* Previews */}
      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mt-4">
          {files.map((file) => (
            <div key={file.id} className="relative aspect-square rounded-md overflow-hidden border border-zinc-200 group shadow-sm">
              <img 
                src={file.previewUrl} 
                alt="Preview" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
              />
              <button
                onClick={() => removeFile(file.id)}
                className="absolute top-1 right-1 bg-white text-zinc-900 p-1 rounded-full hover:bg-red-50 transition-colors shadow-md"
              >
                <XIcon className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;