import React, { useState } from 'react';

const VideoUpload = () => {
  const [file, setFile] = useState(null); // For storing the single video file
  const [uploadProgress, setUploadProgress] = useState(0); // For storing upload progress

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if a file is selected
    if (!selectedFile) return;

    // Set the new file
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100; // Stop when complete
          }
          return prev + 10; // Increment progress
        });
      }, 100);

      alert("Video uploaded");
    }
  };

  const handleRemove = () => {
    setFile(null); // Reset the file
    setUploadProgress(0); // Reset progress
  };

  return (
    <div className="p-4 grid grid-cols-2 h-[90vh] gap-4">
      {/* Upload Section */}
      <div className="border p-4 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2">Upload Section</h2>
        <input 
          type="file" 
          accept="video/*" 
          onChange={handleFileChange} 
          className="border p-2 mb-4 w-full" 
        />
        <button
          onClick={handleUpload}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
        {file && (
          <div className="relative border rounded p-1">
            <video 
              src={URL.createObjectURL(file)} 
              alt={file.name} 
              className="h-20 w-20 object-cover rounded cursor-pointer"
              controls
            />
            <button
              onClick={handleRemove}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center"
            >
              &times;
            </button>
            <div className="mt-2">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${uploadProgress}%` }} 
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Preview Section */}
      <div className="border p-4">
        <h2 className="text-xl font-bold mb-2">Preview Section</h2>
        <div>
          {file ? (
            <video 
              src={URL.createObjectURL(file)} 
              alt={file.name} 
              className="h-full w-full object-cover rounded" 
              controls
            />
          ) : (
            <p>No video Selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
