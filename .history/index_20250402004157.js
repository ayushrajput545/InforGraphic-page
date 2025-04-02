
// fetch API

document.getElementById("download-btn").addEventListener("click", async () => {
    const button = document.getElementById("download-btn");
    
    // Change button text to "Processing..."
    button.innerHTML = "Processing...";
    button.disabled = true;

    try {
        console.log("hello");
        const response = await fetch("http://localhost:3000/screenshot");
        const blob = await response.blob();

        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "webpage_screenshot.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

 
        button.disabled = false;
    } catch (error) {
        console.error("Error:", error);
        button.innerHTML = "Error! Try Again";
        button.disabled = false;
    }
});

