document.getElementById('convert').addEventListener('click', function(){
    console.log("Convert Button clicked.");
    let queryinfo = { active: true, currentWindow: true};
    chrome.tabs.query(queryinfo, function(tabs){
        if (chrome.runtime.lastError){
            console.error("Error qeurying the tabs.", chrome.runtime.lastError);
            return; //stop the function altogether.
        }
        let activeTab = tabs[0];
        console.log("ActiveTabID: ", activeTab.id);
        chrome.scripting.executeScript({
            target: {tabId: activeTab.id},
            function: function(){
                let productTitle = document.getElementById('productTitle')?.innerText.trim();
                console.log('ProductTitle: ', productTitle);
                if (productTitle){
                    chrome.runtime.sendMessage({ action:"searchAmazonIn", productTitle: productTitle});
                }
                else{
                    console.log('Product Title not found.');
                }
            }
        })
    })
})