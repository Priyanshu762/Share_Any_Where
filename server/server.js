const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const shortid = require('shortid');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const  textRoute = require('./routes/textRoute')    
// MongoDB URL
const mongoURL = 'mongodb://localhost:27017/realtime-sharingFuck';

// Init app
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});



app.use((req, res, next) => {
    req.io = io;
    next();
  });
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define schema for uploaded files
// const fileSchema = new mongoose.Schema({
//     originalName: String,
//     fileType: String,
//     filePath: String,
//     fileLink: String,
//     createdAt: { type: Date, default: Date.now },
// });

// const File = mongoose.model('File', fileSchema);

// Setup multer storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + shortid.generate();
//         cb(null, uniqueSuffix + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

// Serve uploaded files statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Upload file endpoint
    // app.post('/upload', upload.single('file'), async (req, res) => {
    //     const { file } = req;
    //     const customLink = req.body.customLink || shortid.generate();
        
    //     const newFile = new File({
    //         originalName: file.originalname,
    //         fileType: file.mimetype,
    //         filePath: file.path,
    //         fileLink: customLink,
    //     });

    //     await newFile.save();

    //     // Broadcast to clients
    //     io.emit('fileUploaded', newFile);

    //     res.json({
    //         message: 'File uploaded successfully',
    //         fileLink: customLink,
    //         fileUrl: `http://localhost:5000/uploads/${file.filename}`,
    //     });
    // });
app.use('/api',textRoute)
// Get file by link and serve its metadata
// app.get('/file/:link', async (req, res) => {
//     const file = await File.findOne({ fileLink: req.params.link });
    
//     if (!file) return res.status(404).json({ message: 'File not found' });

//     res.json(file);
// });

// Handle real-time connection
io.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
