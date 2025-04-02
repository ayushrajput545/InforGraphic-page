const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow frontend requests

app.get("/screenshot", async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate to your frontend page (Change URL if needed)
        await page.goto("https://infographic4u.netlify.app", { waitUntil: "networkidle2" });

        // Remove the button before taking the screenshot
        await page.evaluate(() => {
            const button = document.getElementById("download-btn");
            if (button) button.style.display = "none";
        });

        // Capture full page screenshot
        const screenshot = await page.screenshot({ fullPage: true });

        await browser.close();

        // Send the screenshot as a response
        res.setHeader("Content-Type", "image/png");
        res.send(screenshot);
    } catch (error) {
        console.error("Error taking screenshot:", error);
        res.status(500).send("Error taking screenshot");
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
