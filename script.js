const startDate = new Date("2025-01-10T17:23:00").getTime();

const countUpFunction = setInterval(() => {
    const now = new Date().getTime();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById("tiempo-transcurrido").innerHTML = 
        `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;

}, 1000);


const carrusel = document.querySelector('.fotos');



document.getElementById("boton-sorpresa").addEventListener("click", function() {
    fetch('frases.json')
        .then(response => response.json())
        .then(frases => {
            // Seleccionar una frase aleatoria
            const randomIndex = Math.floor(Math.random() * frases.length);
            const randomFrase = frases[randomIndex];
            
            // Mostrar la frase en el mensaje de la alerta
            document.getElementById("texto-alerta").textContent = randomFrase;
            
            // Mostrar la alerta
            document.getElementById("miAlerta").style.display = "block";
        })
        .catch(error => console.error('Error al obtener las frases:', error));
});

// Cerrar la alerta cuando se hace clic en la X
document.getElementById("alerta-cerrar").addEventListener("click", function() {
    document.getElementById("miAlerta").style.display = "none";
});

