document.addEventListener('DOMContentLoaded', function(){
    let productTitleRaw = document.getElementById('productTitle');
    console.log("Raw Prdouct Title is: ", productTitleRaw);
    if(productTitleRaw){
        let productTitle = productTitleRaw.innerText.trim();
        console.log("Product Title: ", productTitle);
        chrome.runtime.sendMessage({action:'searchAmazonIn', productTitle: productTitle});
    }
});