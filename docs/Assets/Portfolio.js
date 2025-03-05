document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let destination = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => { window.location.href = destination; }, 500); // Faster transition
    });
});
