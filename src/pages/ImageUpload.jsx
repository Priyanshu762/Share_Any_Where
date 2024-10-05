import React, { useState } from 'react';

const DocumentUpload = () => {
  const [files, setFiles] = useState([]);
  const [documentClicked, setDocumentClicked] = useState(null); // Store clicked document

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Limit to 5 files
    if (selectedFiles.length + files.length > 5) {
      alert("You can only upload up to 5 documents.");
      return;
    }

    // Set the new files
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleUpload = () => {
    if (files.length > 0) {
      // Perform upload logic here
      alert("Documents uploaded");
    }
  };

  const handleRemove = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter(file => file !== fileToRemove));
    // Reset documentClicked if the removed document was currently selected
    if (documentClicked === fileToRemove) {
      setDocumentClicked(null);
    }
  };

  const handleDocumentClick = (file) => {
    setDocumentClicked(file); // Set the clicked document to be previewed
  };

  const renderPreview = (file) => {
    if (file.type === 'application/pdf') {
      return (
        <iframe 
          src={URL.createObjectURL(file)} 
          className="w-full h-full" 
          title="PDF Preview"
        />
      );
    } else if (file.type === 'text/plain') {
      // Handle text file preview
      const [content, setContent] = useState('');

      const reader = new FileReader();
      reader.onload = (e) => setContent(e.target.result);
      reader.readAsText(file);

      return (
        <div className="p-4 bg-gray-100 overflow-auto h-full">
          <pre>{content}</pre>
        </div>
      );
    } else {
      return <p>Preview not available for this file type.</p>;
    }
  };

  return (
    <div className="p-4 grid grid-cols-2 h-[90vh] gap-4">
      {/* Upload Section */}
      <div className="border p-4 flex flex-col gap-4">
        <div className='flex flex-col'>
          <h2 className="text-xl font-bold mb-2">Upload Section</h2>
          <input 
            type="file" 
            accept=".pdf,.doc,.docx,.txt" // Restrict to document file types
            onChange={handleFileChange} 
            multiple 
            className="border p-2 mb-4 w-full" 
          />
          <button
            onClick={handleUpload}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {files.map((file, index) => (
            <div key={index} className="relative border rounded p-1">
              <div 
                className="h-20 w-20 flex items-center justify-center bg-gray-100 cursor-pointer rounded"
                onClick={() => handleDocumentClick(file)} // Set click handler for document
              >
              </div>
              <button
                onClick={() => handleRemove(file)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Section */}
      <div className="border p-4 overflow-hidden">
        <h2 className="text-xl font-bold mb-2">Preview Section</h2>
        <div className="h-[80vh] overflow-auto">
          {documentClicked ? ( // Check if a document has been clicked
            renderPreview(documentClicked)
          ) : (
            <p>No document selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
