document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the values of the form inputs
        const helpType = document.querySelector('input[name="help_type"]:checked').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const preferredContactMethods = [];
        document.querySelectorAll('input[name="preferred_contact"]:checked').forEach(function(checkbox) {
            preferredContactMethods.push(checkbox.value);
        });

        // Log the values
        console.log('Help Type:', helpType);
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Preferred Contact Methods:', preferredContactMethods);
        console.log('Message: ', message)
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
  
    inputs.forEach(input => {
      const waveSpan = document.createElement('span');
      waveSpan.classList.add('wave-animation');
      input.insertAdjacentElement('afterend', waveSpan);
  
      input.addEventListener('focus', () => {
        waveSpan.style.transform = 'scaleX(1)';
      });
  
      input.addEventListener('blur', () => {
        waveSpan.style.transform = 'scaleX(0)';
      });
    });
  });