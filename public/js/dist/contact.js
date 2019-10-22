console.log("contact.js loaded");
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("form submission");
  let formData = new FormData(contactForm);
  let resp = await fetch("/sendEmail", {
    method: 'POST',
    body: formData
  });
  alert("Successfully sent Brendan an email!");
});