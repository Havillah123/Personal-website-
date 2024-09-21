// Show More Info Button Interaction
document.getElementById('more-info').addEventListener('click', function() {
    const hiddenInfo = document.getElementById('hidden-info');
    if (hiddenInfo.style.display === 'none') {
        hiddenInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        hiddenInfo.style.display = 'none';
        this.textContent = 'Show More';
    }
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset(); // Reset the form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
