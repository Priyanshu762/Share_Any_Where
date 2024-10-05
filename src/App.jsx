import React, { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import TextUpload from "./pages/TextUpload";
import ImageUpload from "./pages/ImageUpload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Text } from "lucide-react";
import VideoUpload from "./pages/VideoUpload";
import DocumentUpload from "./pages/ImageUpload";


const App = () => {
  return (
    
      <div className="flex min-h-screen">
        {/* Sidebar with transition */}
        <Sidebar />

        {/* Main Section */}
        <div className={`flex-1 transition-all duration-300`}>
          {/* Navbar */}
          <Navbar />

          {/* Content Section */}
          <Routes>
            <Route path="/" element={<TextUpload />} />
            <Route path="/image" element={<ImageUpload />} />
            <Route path="/video" element={<VideoUpload />} />
            <Route path="/document" element={<DocumentUpload />} />
          </Routes>
        </div>
      </div>
    
  );
};

export default App;
