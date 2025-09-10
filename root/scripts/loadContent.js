/**
 * Loads an asset (HTML, text, etc.) into a target element by ID.
 * @param {string} assetPath - Path to the asset (e.g., 'index.html').
 * @param {string} targetId - ID of the target element.
 */
function loadAssetIntoDiv(assetPath, targetId) {
  fetch(assetPath)
    .then((response) => {
      if (!response.ok) {
        console.error(
          `Failed to fetch ${assetPath}: ${response.status} ${response.statusText}`
        );
        throw new Error("Network response was not ok");
      }
    return response.text();
    })
    .then((data) => {
      const target = document.getElementById(targetId);
      if (target) {
        target.innerHTML = data;
      } else {
        console.error(`Element with id "${targetId}" not found.`);
      }
    })
    .catch((error) => {
      console.error(
        `Error loading asset "${assetPath}" into "${targetId}":`,
        error
      );
    });
}

// Example usage: load navbar.html into #main-nav
document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    console.log("Mobile device detected");
    loadAssetIntoDiv("pages/mobilenav.html", "nav-right");
    // Wait for mobilenav to load before accessing nav-right
    setTimeout(() => {
      const navRight = document.getElementById("nav-right");
      if (navRight) {
        navRight.setAttribute("style", "font-size: 3em;");
      }
      attachNavListeners();
    }, 300);
  } else {
    loadAssetIntoDiv("pages/navbar.html", "nav-right");
    // Wait for navbar to load before accessing nav-right
    setTimeout(() => {
      attachNavListeners();
    }, 300);
  }

  loadAssetIntoDiv("pages/home.html", "content");

  function attachNavListeners() {
    const homeBtn = document.getElementById("homebtn");
    if (homeBtn) {
      homeBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/home.html", "content");
      });
    }
    /*
    const testBtn = document.getElementById("test");
    if (testBtn) {
      testBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/contact.html", "content");
      });
    }
    */
    const contactBtn = document.getElementById("contactbtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/contact.html", "content");
      });
    }

    const productsBtn = document.getElementById("productsbtn");
    if (productsBtn) {
      productsBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/products.html", "content");
      });
    }
  }
});
