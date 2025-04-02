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
    origin: 'left',     // Start from the left
    duration: 1000,
    delay: 200,
    interval: 300,
    opacity: 0,
    easing: 'ease-in-out'
});