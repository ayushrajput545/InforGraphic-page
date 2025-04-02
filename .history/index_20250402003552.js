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

document.getElementById("download-btn").addEventListener("click", () => {
    console.log("hello")
    fetch("http://localhost:3000/screenshot")
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "webpage_screenshot.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        .catch(error => console.error("Error:", error));
});

