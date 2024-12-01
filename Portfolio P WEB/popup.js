function openPopup(imageSrc) {
    const popupWidth = 800; // Largura da janela
    const popupHeight = 600; // Altura da janela

    // Calcula a posição centralizada
    const left = (window.screen.width / 2) - (popupWidth / 2);
    const top = (window.screen.height / 2) - (popupHeight / 2);

    // Abre a janela popup com a imagem
    const popup = window.open(
        imageSrc, 
        '_blank', 
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=yes`
    );

    // Se a janela pop-up for bloqueada, exibe um alerta
    if (!popup) {
        alert('A janela pop-up foi bloqueada. Por favor, permita pop-ups no seu navegador.');
    }
}
