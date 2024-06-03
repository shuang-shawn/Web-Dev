const { error } = require("console");
const fs = require("fs");

fs.writeFile("message.txt", "Hello from NodeJS", (error) => {
    if (error) throw error;
    console.log("the file has been saved");
})