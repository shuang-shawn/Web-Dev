import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const weekdayText = "Lets work hard";
const weekendText = "Let's chill";

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const day = new Date();
    let today = day.getDay();
    if (today < 1 || today > 5) {
        res.render("index.ejs",
            {day: "Weekend", text: weekendText}
        )
    } else {
        res.render("index.ejs",
        {day: "Weekday", text: weekdayText}
    )
    }
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})