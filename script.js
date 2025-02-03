// Fecha de inicio (10 de enero de 2025)
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
