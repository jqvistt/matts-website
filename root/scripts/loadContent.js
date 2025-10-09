/**
 * Loads an asset (HTML, text, etc.) into a target element by ID.
 * @param {string} assetPath - Path to the asset (e.g., 'index.html').
 * @param {string} targetId - ID of the target element.
 */


var productevt = new CustomEvent("ProductPageLoaded");
var contactevt = new CustomEvent("ContactPageLoaded");



//Function that loads an html file into in this case the main content div on the page. We use this for a more seamless experience.
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
        // Dispatch event if products or contact page is loaded
        if (assetPath.includes("products.html")) {
          document.dispatchEvent(productevt);
        }
        if (assetPath.includes("contact.html")) {
          document.dispatchEvent(contactevt);
        }
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
      attatchClickListeners();
    }, 300);
  } else {
    loadAssetIntoDiv("pages/navbar.html", "nav-right");
    // Wait for navbar to load before accessing nav-right
    setTimeout(() => {
      attatchClickListeners();
    }, 300);
  }

  //switch case that fetches last loaded page from session storage and loads that page. If no page is found (a fresh session of the page is opened up), it defaults to home.
  switch (sessionStorage.getItem("pageLoaded")) {
    case "home":
      loadAssetIntoDiv("pages/home.html", "content");
      break;
    case "contact":
      loadAssetIntoDiv("pages/contact.html", "content");
      break;
    case "products":
      loadAssetIntoDiv("pages/products.html", "content");
      document.dispatchEvent(productevt);
    case "about":
      loadAssetIntoDiv("pages/about.html", "content");
      break;
    default:
      sessionStorage.setItem("pageLoaded", "home");
      loadAssetIntoDiv("pages/home.html", "content");
  }

  // Default to loading home page if no page is set
  if (!sessionStorage.getItem("pageLoaded"))
  loadAssetIntoDiv("pages/home.html", "content");

  

  function attatchClickListeners() {

    const homeBtn = document.getElementById("homebtn");
    if (homeBtn) {
      homeBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/home.html", "content");
        sessionStorage.setItem("pageLoaded", "home");
      });
    }

    const contactBtn = document.getElementById("contactbtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/contact.html", "content");
        sessionStorage.setItem("pageLoaded", "contact");
      });
    }

    const productsBtn = document.getElementById("productsbtn");
    if (productsBtn) {
      productsBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/products.html", "content");
        sessionStorage.setItem("pageLoaded", "products");
      });
    }
    const aboutBtn = document.getElementById("aboutbtn");
    if (aboutBtn) {
      aboutBtn.addEventListener("click", function () {
        loadAssetIntoDiv("pages/about.html", "content");
        sessionStorage.setItem("pageLoaded", "about");
      });
    }

  }

});
