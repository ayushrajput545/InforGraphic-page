document.getElementById("download-btn").addEventListener("click", function() {
    // Ensure html2canvas is loaded
    if (typeof html2canvas === "undefined") {
        alert("html2canvas library not loaded!");
        return;
    }

    // Target only the container instead of the entire document body
    let element = document.querySelector(".container");

    html2canvas(element, { scale: 2 }).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "screenshot.png";
        link.click();
    }).catch(err => {
        console.error("Screenshot capture failed:", err);
    });
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
