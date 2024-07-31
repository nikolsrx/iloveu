document.getElementById('revealButton').addEventListener('click', function() {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden');

    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    
    generateHearts();

    // Solo escribe el mensaje si no se ha escrito aún
    const typedMessageElement = document.getElementById('typedMessage');
    if (!typedMessageElement.dataset.writing) {
        typedMessageElement.dataset.writing = 'true'; // Marca que se está escribiendo
        typeMessage("Cada día a tu lado me hace darme cuenta de lo afortunada que soy por tenerte, te amo con todo mi corazón, eres mi niña hermosa. Puse esta canción porque sé que te gusta y a mí tambien me encanta, y amo imaginarme estando contigo mientras te tengo en mis brazos acariciandote, besandote y diciendote lo mucho que te amo mientras suena. Te amo, mi chiquita.");
    }
});

function generateHearts() {
    const container = document.getElementById('heartsContainer');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

function typeMessage(message) {
    const typedMessageElement = document.getElementById('typedMessage');
    let index = 0;
    typedMessageElement.innerHTML = "";
    typedMessageElement.dataset.writing = 'true'; // Marca que se está escribiendo

    function type() {
        if (index < message.length) {
            typedMessageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 50); // Ajusta la velocidad de escritura aquí
        } else {
            typedMessageElement.dataset.writing = 'false'; // Marca que se ha terminado de escribir
        }
    }

    type();
}