//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
// import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let check = false;

app.use(express.urlencoded({extended: true}));
function checkPassword(req, res, next) {
    if (req.body.password && req.body.password === "ILoveProgramming") {
        check = true;
    } else {
        if(req.body.password) {
            console.log(`password incorrect: ${req.body.password}`);
        } else {
            console.log("cannot detect password entered");
        }
        check = false;
    }
    next();

}
app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if (check) {
        check = false;
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
        // res.sendStatus(403);
    }
})







app.listen(port, (req, res)=> {
    console.log(`Server is running on port ${port}`);
})
