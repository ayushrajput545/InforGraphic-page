ScrollReveal().reveal('.content-steps-odd', {
    distance: '100px',  // Move 100px
    origin: 'right',    // Start from the right
    duration: 1000,     // Animation duration in ms
    delay: 200,         // Delay before animation starts
    interval: 300,      // Delay between multiple elements
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