
document.addEventListener('DOMContentLoaded', function() {

    const quoteButton = document.getElementById('quoteButton');
    const quoteModal = document.getElementById('quoteModal');
    const closeModal = document.getElementById('closeModal');

    quoteButton.addEventListener('click', function() {
        quoteModal.classList.toggle('hidden');
    });


    closeModal.addEventListener('click', function() {
        quoteModal.classList.add('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target === quoteModal) {
            quoteModal.classList.add('hidden');
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you! Your message has been sent.'); 
        contactForm.reset(); 
    });
});