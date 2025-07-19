
// Animaciones de corazones flotando
for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animation = 'flotar 10s infinite ease-in';
    document.body.appendChild(heart);
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes flotar {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
