/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "url",
      message: "Please enter url: ",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let answer = answers["url"];

    fs.writeFile("URL2.txt", answer, (err) => {
      if (err) throw err;
      console.log("file is saved");
    });

    let image = qr.image(answer, { type: "png" });
    image.pipe(fs.createWriteStream("URL2.png"));
    // console.log(answers["url"]);
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("something is wrong");
    }
  });
