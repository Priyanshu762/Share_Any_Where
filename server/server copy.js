const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Setup multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Upload folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File name
  },
});

const upload = multer({ storage: storage });

// API for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send({ message: 'File uploaded successfully!', filename: req.file.filename });
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
