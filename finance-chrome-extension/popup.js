

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('summarizeButton').addEventListener('click', summarizeCurrentArticle);
});

async function summarizeCurrentArticle() {
    // Get the current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Pass the URL of the current tab to summarizeArticle function
    const summarizedText = await summarizeArticle(tab.url);
    
    // Display the summarized text in the extension popup
    if (summarizedText) {
        document.getElementById('summary').textContent = summarizedText;
    } else {
        document.getElementById('summary').textContent = "Failed to summarize article.";
    }
}

async function summarizeArticle(url) {
    try {
        const options = {
            method: 'POST',
            headers: {
                'X-API-Key': 'kf-fb06d0616b776ccb84a44a27cfaaa706K144',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "inputs": {
                    "url": url
                }
            })
        };

        const response = await fetch('http://keyflow-backend.com/api/trigger', options);
        const result = await response.json();
        return result.text; // Return the summarized text
    } catch (error) {
        console.error('Error:', error);
        return null; // Return null if an error occurs
    }
}
