/**
 * contact.js — Contact form validation and submission handling
 */

(function () {
  'use strict';

  const form       = document.getElementById('contact-form');
  const statusEl   = document.getElementById('form-status');
  const submitBtn  = document.getElementById('contact-submit');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameVal    = form.querySelector('#contact-name').value.trim();
    const emailVal   = form.querySelector('#contact-email-input').value.trim();
    const messageVal = form.querySelector('#contact-message').value.trim();

    // Clear previous errors
    form.querySelectorAll('.error').forEach(function (el) { el.classList.remove('error'); });
    showStatus('', '');

    // Validate
    let valid = true;

    if (!nameVal) {
      form.querySelector('#contact-name').classList.add('error');
      valid = false;
    }

    if (!emailVal || !isValidEmail(emailVal)) {
      form.querySelector('#contact-email-input').classList.add('error');
      valid = false;
    }

    if (!messageVal) {
      form.querySelector('#contact-message').classList.add('error');
      valid = false;
    }

    if (!valid) {
      showStatus('Please fill in all required fields correctly.', 'error');
      return;
    }

    // No backend: hand the message to the visitor's mail client
    const subjectVal = form.querySelector('#contact-subject').value.trim() || 'Message from portfolio';
    const body = messageVal + '\n\n' + nameVal + '\n' + emailVal;
    window.location.href = 'mailto:mostafaelfallal90@gmail.com'
      + '?subject=' + encodeURIComponent(subjectVal)
      + '&body=' + encodeURIComponent(body);
    showStatus('Your email app should open with the message filled in. If it does not, email mostafaelfallal90@gmail.com directly.', 'success');
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = 'form-note ' + (type || '');
  }
})();
