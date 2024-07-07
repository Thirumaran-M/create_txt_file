import fs from "fs";

let dateStamp = new Date().toISOString();

console.log(dateStamp);

let FileName = dateStamp.replace(/:/g, "-");

fs.writeFile(`./${FileName}.txt`, dateStamp, "utf-8", (err) => {
    if (err) {
        console.log("Error: ", err);
    } else {
        console.log("File Written Successfully!");
    }
});
