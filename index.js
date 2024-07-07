import express, { text } from "express";
import fs from "fs";
import path from "path";

const app = express();
const directoryPath = "./"; // Directory Declaration 

//Endpoint to create new file with its time stamp  
app.get("/", (req, res) => {
    //    res.json({message: "Server Initiated Successfully!"})
    let dateStamp = new Date().toISOString();
    console.log("Current Date and Time is:", dateStamp);
    let FileName = dateStamp.replace(/:/g, "-");

    fs.writeFile(`${directoryPath}${FileName}.txt`, dateStamp, "utf-8", (err) => {
        if (err) {
            console.log("Error: ", err);
        } else {
            console.log("File Written Successfully!");
            res.send(`<p>${FileName}.txt File Written Successfully!</p>`);

        }
    });

});


// Endpoint to retrieve all text files
app.get("/files", (req, res) => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log("Error: ", err);
        }
        const textFiles = files.filter((file) => path.extname(file) === ".txt");//get txt filenames from directory
        let listItems = textFiles.map((file)=>{return `<li>${file}</li>`}).join("");//List item Creation
        //res.json({ files: textFiles });
        res.send(`<h1>Files List (*.txt):</h1><ol>${listItems}</ol>`);
    });
});

// Start server
let PORT = 8080;
app.listen(PORT, () => console.log(`
Server initiated in port ${PORT}
1. Create a txt file by opening: http://localhost:${PORT}
2. List the txt files in the current directory by opening: http://localhost:${PORT}/files`));