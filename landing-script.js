document.querySelector('.metal-doors').addEventListener('click', function() {
    this.classList.add('open');
    
    // Wait for doors to open fully before showing logo
    setTimeout(function() {
        const logoContainer = document.querySelector('.logo-container');
        logoContainer.style.transform = 'translate(-50%, -50%) scale(1)'; // Show logo
        logoContainer.style.opacity = '1'; // Ensure logo opacity is set to 1

        // Animate logo closer and bigger
        setTimeout(function() {
            logoContainer.style.transform = 'translate(-50%, -50%) scale(4)'; // Enlarge logo further
            
            // Redirect to index.html after logo animation completes
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000); // Adjust the delay as needed (1000ms = 1 second)
            
        }, 1000); // Adjust the delay as needed (1000ms = 1 second)
    }, 2000); // Adjust the delay as needed (2000ms = 2 seconds)
});

