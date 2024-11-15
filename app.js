// Function to show additional resource details
function showResourceDetails(type) {
    if (type === 'legal') {
        alert("Legal Assistance: Here you can find legal help and understand your rights.");
    } else if (type === 'counseling') {
        alert("Counseling Services: Access support for mental health and well-being.");
    } else if (type === 'community') {
        alert("Community Support: Connect with others and access local resources for support.");
    }
}

// Form submission event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (for demonstration purposes)
    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! We'll get back to you shortly.");
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
});
