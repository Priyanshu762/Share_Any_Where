const { Router } = require("express");
const mongoose = require("mongoose");
const  Text  = require("../models/textData");

const router = Router();

router.post("/uploadText", async(req, res) => {
  const io = req.io;  // Get the io instance from the request object
  const {url,text} = req.body;
  console.log(url,text);
  
    const newText= ({
        url,
        text
    })
    try {
        const newText = new Text({
            url,
            text
        });
        
        // Save the new text to the database
        await newText.save();
        
        // Emit the event to all connected clients
        io.emit('newUploaded', { message: 'A new file has been uploaded!' });
        
        // Send success response
        res.send("Text uploaded and event emitted!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error uploading file");
        
    }
    await newText.save();
  io.emit('newUploaded', { message: 'A new file has been uploaded!' });  // Broadcast event to all clients

  res.send("File uploaded and event emitted!");
});

router.get("/getFiles:link", (req, res) => {
    const link=req.query.link;
  res.send("Files retrieved!");
});
module.exports = router;
