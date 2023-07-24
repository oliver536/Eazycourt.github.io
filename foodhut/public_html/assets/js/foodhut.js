

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }


 // Obtenemos el Modal y el botón de reserva
const modal = document.getElementById('reservationModal');
const reserveButtons = document.querySelectorAll('.canchaAnchor');

// Agregamos un evento de clic a cada botón de reserva
reserveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const canchaId = button.getAttribute('data-cancha');
        openModal(canchaId);
    });
});

// Función para abrir el Modal de reserva con la cancha seleccionada
function openModal(canchaId) {
    modal.style.display = 'block';
    // Aquí puedes agregar la lógica para procesar la reserva con la canchaId seleccionada
    // Por ejemplo, puedes enviar la información al servidor para registrar la reserva
}

// Función para cerrar el Modal de reserva
function closeModal() {
    modal.style.display = 'none';
}

// Agregamos un evento de clic al botón de cerrar del Modal
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

// Agregamos un evento de clic fuera del Modal para cerrarlo si el usuario hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});







