document.getElementById("download-btn").addEventListener("click", function () {
    let button = document.getElementById("download-btn");

    // Hide button before taking screenshot
    button.style.display = "none";

    // Delay to allow the button to be hidden before capturing
    setTimeout(() => {
        html2canvas(document.body, { scale: 2 }).then(canvas => {
            let link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "screenshot.png";
            link.click();

            // Restore button after capturing
            button.style.display = "block";
        }).catch(err => {
            console.error("Screenshot capture failed:", err);
        });
    }, 300); // Small delay to allow UI update
});




// document.getElementById("download-btn").addEventListener("click", async () => {
//     const button = document.getElementById("download-btn");

//     // Show loading text
//     button.innerHTML = "Processing...";
//     button.disabled = true;

//     try {
//         const response = await fetch("https://inforgraphic-page-5.onrender.com/screenshot");
//         const blob = await response.blob();

//         // Download the screenshot
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "full_page_screenshot.png";
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);

//         // Restore button text
//         button.innerHTML = "Take Screenshot";
//         button.disabled = false;
//     } catch (error) {
//         console.error("Error:", error);
//         button.innerHTML = "Error! Try Again";
//         button.disabled = false;
//     }
// });
