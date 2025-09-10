/**
 * Loads an asset (HTML, text, etc.) into a target element by ID.
 * @param {string} assetPath - Path to the asset (e.g., 'index.html').
 * @param {string} targetId - ID of the target element.
 */
function loadAssetIntoDiv(assetPath, targetId) {
    fetch(assetPath)
        .then(response => {
            if (!response.ok) {
                console.error(`Failed to fetch ${assetPath}: ${response.status} ${response.statusText}`);
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const target = document.getElementById(targetId);
            if (target) {
                target.innerHTML = data;
            } else {
                console.error(`Element with id "${targetId}" not found.`);
            }
        })
        .catch(error => {
            console.error(`Error loading asset "${assetPath}" into "${targetId}":`, error);
        });
}

// Example usage: load navbar.html into #main-nav
document.addEventListener('DOMContentLoaded', function() {
    loadAssetIntoDiv('navbar.html', 'main-nav');
    loadAssetIntoDiv('footer.html', 'main-footer');
});

document.getElementById('home-button').addEventListener('click', function() {
    loadAssetIntoDiv('home.html', 'main-content');
});
document.getElementById('home-button').addEventListener('click', function() {
    loadAssetIntoDiv('home.html', 'main-content');
});
document.getElementById('home-button').addEventListener('click', function() {
    loadAssetIntoDiv('home.html', 'main-content');
});
document.getElementById('home-button').addEventListener('click', function() {
    loadAssetIntoDiv('home.html', 'main-content');
});
document.getElementById('home-button').addEventListener('click', function() {
    loadAssetIntoDiv('home.html', 'main-content');
});
document.getElementById('home-button').addEventListener('click', function() {
    loadAssetIntoDiv('home.html', 'main-content');
});