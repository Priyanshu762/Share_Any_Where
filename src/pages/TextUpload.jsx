import React, { useState } from 'react';
import { Copy } from 'lucide-react'; // Make sure to install lucide-react if you haven't already

const TextUpload = () => {
  const [text, setText] = useState('');

  // Handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle text upload logic
  const handleUpload = () => {
    if (text) {
      // Perform upload logic here
      alert("Text uploaded: " + text);
      setText(''); // Clear text area after upload
    }
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Could not copy text: ", err);
    });
  };

  return (
    <div className="p-4 grid grid-cols-2 gap-4 h-[90vh]">
      {/* Upload Section */}
      <div className="border p-4 h-[80vh]">
        <h2 className="text-xl font-bold mb-2">Upload Section</h2>
        <textarea
          rows="5"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          className="w-full border rounded p-2 h-[60vh]"
        />
        <button
          onClick={handleUpload}
          className="bg-green-500 text-white mt-4 px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>

      {/* Preview Section */}
      <div className="border p-4 h-[80vh] flex flex-col relative">
        <h2 className="text-xl font-bold mb-2">Preview Section</h2>
        
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded flex items-center"
        >
          <Copy size={20} />
        </button>

        <div className="">
          {text ? (
            <p className='overflow-hidden'>{text}</p>
          ) : (
            <p>No text entered</p>
          )}
        </div>
        <p className="mt-2">Length: {text.length} characters</p>
      </div>
    </div>
  );
};

export default TextUpload;
