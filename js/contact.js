// This script handles the form on the contact.html page
window.onload = function() {
    // Handles contact form validation
    document.querySelector('#radioOptions').addEventListener('click', () => {
    // Checks if order problem option is selected - if so, order number box will appear
    if (document.querySelector('#radioOrder').checked) {
      document.querySelector('#OrderNumberBox').removeAttribute('hidden');
    // Otherwise, box remains hidden
    } else {
      document.querySelector('#OrderNumberBox').setAttribute('hidden', 'true');
    }
  });
  
  let form = document.querySelector('#contact-form');
  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
};
