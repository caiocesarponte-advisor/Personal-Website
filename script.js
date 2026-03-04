const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Please complete all required fields before submitting.';
    return;
  }

  const formData = new FormData(form);
  const name = formData.get('name');

  // Analytics hooks for lead event tracking
  if (window.gtag) {
    window.gtag('event', 'lead_form_submit', {
      event_category: 'engagement',
      event_label: 'financial_diagnosis',
    });
  }

  if (window.hj) {
    window.hj('event', 'lead_form_submit');
  }

  if (window.clarity) {
    window.clarity('set', 'lead_status', 'submitted');
  }

  status.textContent = `Thank you, ${name}. Your request was received. We will contact you soon to schedule your financial diagnosis.`;
  form.reset();
});
