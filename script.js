// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form Submission (demo only)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
  this.reset();
});
