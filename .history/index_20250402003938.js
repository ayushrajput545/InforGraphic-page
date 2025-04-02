ScrollReveal().reveal('.content-steps-odd', {
    distance: '100px',  
    origin: 'right',     
    duration: 1000,      
    delay: 200,          
    interval: 300,       
    opacity: 0,          
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.content-steps-even', {
    distance: '100px',
    origin: 'left',      
    duration: 1000,
    delay: 200,
    interval: 300,
    opacity: 0,
    easing: 'ease-in-out'
});


// fetch API

document.getElementById("download-btn").addEventListener("click", async () => {
    const button = document.getElementById("download-btn");
    
    // Change button text to "Processing..."
    button.innerHTML = "🔄 Processing...";
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

        // Restore button text
        button.innerHTML = "📷 Download Screenshot";
        button.disabled = false;
    } catch (error) {
        console.error("Error:", error);
        button.innerHTML = "❌ Error! Try Again";
        button.disabled = false;
    }
});

