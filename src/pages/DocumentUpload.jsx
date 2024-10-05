import React,{useState} from 'react'

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle file upload logic
  const handleUpload = () => {
    if (file) {
      // Perform upload logic here
      alert("File uploaded");
    }
  };
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
          {/* Upload Section */}
          <div className="border p-4">
            <h2 className="text-xl font-bold mb-2">Upload Section</h2>
            <input type="file" onChange={handleFileChange} />
            <button
              onClick={handleUpload}
              className="bg-green-500 text-white mt-4 px-4 py-2 rounded"
            >
              Upload
            </button>
          </div>

          {/* Preview Section */}
          <div className="border p-4">
            <h2 className="text-xl font-bold mb-2">Preview Section</h2>
            {file ? (
              <div>
                <p>File: {file.name}</p>
                <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
              </div>
            ) : (
              <p>No file uploaded</p>
            )}
          </div>
        </div>
  )
}

export default ImageUpload
