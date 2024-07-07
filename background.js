chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log('Message Received!');
    if (message.action === 'searchAmazonIn'){
        let productTitle = message.productTitle;
        console.log('Product Title:');
        let googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(productTitle)}+site:amazon.in`;
        console.log("Google Search URL: ", googleSearchUrl);
        chrome.tabs.create({
            url: googleSearchUrl
        });
    }
});