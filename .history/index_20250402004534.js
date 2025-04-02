document.getElementById("download-btn").addEventListener("click", async () => {
    const button = document.getElementById("download-btn");

    // Show loading text
    button.innerHTML = "🔄 Processing...";
    button.disabled = true;

    try {
        const response = await fetch("http://localhost:3000/screenshot");
        const blob = await response.blob();

        // Download the screenshot
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "full_page_screenshot.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Restore button text
        button.innerHTML = "Take Screenshot";
        button.disabled = false;
    } catch (error) {
        console.error("Error:", error);
        button.innerHTML = "❌ Error! Try Again";
        button.disabled = false;
    }
});
