document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu mensaje!');
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('https://formspree.io/f/mkgwndba', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Mensaje enviado con éxito');
        } else {
            alert('Hubo un problema al enviar el mensaje');
        }
    }).catch(error => {
        alert('Hubo un error: ' + error.message);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);

        fetch('https://formspree.io/f/mkgwndba', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Mensaje enviado con éxito');
                this.reset(); // Limpia el formulario después de enviar
            } else {
                alert('Hubo un problema al enviar el mensaje');
            }
        }).catch(error => {
            alert('Hubo un error: ' + error.message);
        });
    });
});

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide .review-card');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const carousel = document.querySelector('.carousel-slide');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
