// js/script.js

document.addEventListener('click', function(event) {
    // 1. Definições do Efeito
    const numberOfConfetti = 30; // Quantidade de "confetes" a serem criados
    const colors = ['#f44336', '#2196f3', '#ffeb3b', '#4caf50', '#9c27b0', '#ff9800']; // Cores vibrantes

    // 2. Criação dos Confetes
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        
        // Define a cor de forma aleatória
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Aplica estilos básicos diretamente no elemento (SEM CSS, apenas JS e estilo embutido)
        confetti.style.position = 'absolute';
        confetti.style.width = '6px'; // Tamanho pequeno
        confetti.style.height = '12px';
        confetti.style.backgroundColor = color;
        confetti.style.borderRadius = '50%'; // Formato arredondado
        confetti.style.zIndex = '9999'; // Garante que fique por cima
        
        // Posiciona o confete onde o mouse clicou (event.clientX/Y)
        confetti.style.left = event.clientX + 'px';
        confetti.style.top = event.clientY + 'px';

        // 3. Adiciona e Anima o Confete
        document.body.appendChild(confetti);

        // Gera valores aleatórios para a animação
        const rotation = Math.random() * 360; // Rotação
        // Distância horizontal (lançamento)
        const travelX = (Math.random() - 0.5) * 300; 
        // Distância vertical (queda + lançamento inicial)
        const travelY = -50 - (Math.random() * 150); 
        const duration = 1000 + (Math.random() * 1000); // Duração da animação (1 a 2 segundos)

        // Usa `setTimeout` para criar a animação de "queda" (transition/animation simples)
        // Isso simula a transição de forma simples sem usar a API Web Animations ou CSS
        setTimeout(() => {
            confetti.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-in`;
            
            // Movimento: Translação e Rotação
            confetti.style.transform = `translate(${travelX}px, ${travelY}px) rotate(${rotation}deg)`;
            
            // Desaparecimento
            confetti.style.opacity = '0';
        }, 10); // Pequeno atraso para garantir que a transição seja aplicada

        // 4. Remoção do Confete após a Animação
        // Remove o elemento do DOM depois que a animação terminar
        setTimeout(() => {
            confetti.remove();
        }, duration + 50); // Tempo total da animação + um pequeno buffer
    }
});