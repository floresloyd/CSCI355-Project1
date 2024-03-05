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
