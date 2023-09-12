var i = 0;

const intervalId = setInterval(unsubscribeChannel, 500); //Execute the function every 500 milliseconds

function unsubscribeChannel() {
    const channelElements = Array.from(document.getElementsByTagName('ytd-channel-renderer')); // Find all channel elements on the page

    if (i < channelElements.length) { // Check if there are more channels to unsubscribe from
        channelElements[i].querySelector("[aria-label^='Unsubscribe from']").click(); // Click the "Unsubscribe" button

        setTimeout(() => { // Set a timeout to confirm the unsubscribe action
            const confirmButton = document.getElementById('confirm-button').querySelector("[aria-label^='Unsubscribe'"); // "Unsubscribe" button in the confirmation dialog
            confirmButton.click();
        }, 300);
    }

    i++;

    console.log(i + ' unsubscribed');  // Log the progress
    console.log(channelElements.length - i + ' remaining');
}

//function stopInterval() {
//    clearInterval(intervalId);
//}

// Uncomment the line below to stop the interval after unsubscribing from all channels
// stopInterval();
