function toggleDetail(id) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}
document.getElementById('contactBtn').addEventListener('click', function(e) {
    // This copies the email to the clipboard automatically
    const email = "fabuljohn03@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        // Show a temporary message that it was copied
        const msg = document.getElementById('copyMessage');
        msg.style.display = 'block';
        
        // Hide the message after 3 seconds
        setTimeout(() => {
            msg.style.display = 'none';
        }, 3000);
    });
});