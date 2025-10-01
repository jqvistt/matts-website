// Prevent form submission and page reload
document.addEventListener("ContactPageLoaded", function() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Show thank you popup or handle form data here
      document.getElementById("thankyou-popup").style.display = "block";
    });
  }
});