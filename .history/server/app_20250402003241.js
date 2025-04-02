const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Route to capture and return screenshot
app.get("/screenshot", async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("http://localhost:5500");  

        const screenshot = await page.screenshot({ type: "png" });
        await browser.close();

        res.set({
            "Content-Type": "image/png",
            "Content-Disposition": "attachment; filename=screenshot.png"
        });
        res.send(screenshot);
    } catch (error) {
        console.error("Error taking screenshot:", error);
        res.status(500).send("Failed to capture screenshot");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
