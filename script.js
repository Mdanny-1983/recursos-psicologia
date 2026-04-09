let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide() {
    slides.forEach(img => img.style.display = 'none');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Cambia la imagen cada 3 segundos si hay más de una
if(slides.length > 1) {
    setInterval(showSlide, 3000);
}
// --- FUNCIONALIDAD PARA FAQ INTERACTIVO (Desplegable) ---
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Cierra los otros items abiertos (opcional, para que solo uno esté abierto a la vez)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        
        // Abre o cierra el item actual
        faqItem.classList.toggle('active');
    });
});