var i = 0;

function unsubscribeChannel() {
    const channelElements = Array.from(document.getElementsByTagName('ytd-channel-renderer')); // find all channel elements on the page

    if (i < channelElements.length) { // check if there are more channels to unsubscribe from
        channelElements[i].querySelector("[aria-label^='Unsubscribe from']").click(); // click the unsubscribe button

        setTimeout(() => { // set a timeout to confirm the unsubscribe action
            const confirmButton = document.getElementById('confirm-button').querySelector("[aria-label^='Unsubscribe']");
            if (confirmButton) {
                confirmButton.click();
            } else {
                console.error('Confirm button not found');
            }
        }, 300);
        console.log(i + ' unsubscribed'); // log the progress
        i++;
    } else {
        console.log('No more channels to unsubscribe from.');
        clearInterval(intervalId); // clear the interval to stop the function
    }
    console.log(channelElements.length - i + ' remaining');
}

const intervalId = setInterval(unsubscribeChannel, 500); //execute the function every 500 milliseconds
