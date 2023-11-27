/**
 * Initiates the process of unsubscribing from YouTube channels by finding channel elements on the page
 * and clicking the 'Unsubscribe' button for each. It uses an interval to perform actions every 500ms.
 */
class ChannelUnsubscriber {
  constructor() {
    this.index = 0;
    this.intervalId = setInterval(() => this.unsubscribeChannel(), 500);
  }

  /**
   * Performs the action of unsubscribing from a single YouTube channel and confirms the action.
   * It logs the progress and stops when there are no more channels to unsubscribe from.
   */
  unsubscribeChannel() {
    const channelElements = Array.from(document.getElementsByTagName('ytd-channel-renderer'));
    if (this.index < channelElements.length) {
      const unsubscribeButton = channelElements[this.index].querySelector("[aria-label^='Unsubscribe from']");
      unsubscribeButton.click();

      setTimeout(() => {
        const confirmButton = document.getElementById('confirm-button').querySelector("[aria-label^='Unsubscribe']");
        if (confirmButton) {
          confirmButton.click();
        } else {
          console.error('Confirm button not found');
        }
      }, 300);

      console.log(`${this.index} unsubscribed`);
      this.index++;
    } else {
      console.log('No more channels to unsubscribe from.');
      clearInterval(this.intervalId);
    }

    console.log(`${channelElements.length - this.index} remaining`);
  }
}

// Start the unsubscription process
new ChannelUnsubscriber();
