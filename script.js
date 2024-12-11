(function() {
    // -------------------- PRODUTOS MAIS VENDIDOS ------------------------
    let currentIndex = 0;

    function moveSlide(direction) {
        const carrossel = document.querySelector('.carrossel');
        const produtos = document.querySelectorAll('.item-vendido');
        const totalProdutos = produtos.length;

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalProdutos - 4; 
        }
        if (currentIndex > totalProdutos - 4) {
            currentIndex = 0; 
        }

        carrossel.style.transform = `translateX(-${currentIndex * 6}%)`;
    }

  
    window.moveSlide = moveSlide;
})();


(function() {
    // ------------------------ SLIDE -----------------------------
    let slideIndex = 0;
    let slideTimer; // Definindo a variável fora para controle

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        // Esconde todas as imagens
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove a classe active dos pontos
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Atualiza o índice do slide
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }  // Volta para a primeira imagem
        slides[slideIndex - 1].style.display = "block";  // Exibe a imagem atual
        dots[slideIndex - 1].className += " active";  // Adiciona a classe active ao ponto atual

        // Muda a imagem a cada 3 segundos
        slideTimer = setTimeout(showSlides, 3000);
    }

    // Função para mostrar o slide correspondente ao ponto clicado
    function currentSlide(n) {
        clearTimeout(slideTimer); // Para a navegação automática
        showSlidesManually(n);   // Mostra a imagem correspondente ao ponto clicado
    }

    // Função para exibir o slide manualmente
    function showSlidesManually(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        slideIndex = n - 1; // Ajusta o índice para o ponto clicado

        // Esconde todas as imagens
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove a classe active dos pontos
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Exibe o slide selecionado
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }

    // Inicia o slide automaticamente
    slideTimer = setTimeout(showSlides, 3000);

    // Tornar as funções acessíveis globalmente apenas se necessário
    window.currentSlide = currentSlide;
})();

const breadcrumb = document.querySelector('.breadcrumb');
const currentPage = document.title; // Obtém o título da página atual
const currentPath = window.location.pathname; // Obtém o caminho da URL atual

// Adiciona o item da página atual ao breadcrumb
const breadcrumbItem = document.createElement('li');
breadcrumbItem.classList.add('breadcrumb-item');
breadcrumbItem.textContent = currentPage;

// Adiciona o link se não for a última página
if (currentPath !== '/index.html') {
  const link = document.createElement('a');
  link.href = currentPath;
  link.textContent = currentPage;
  breadcrumbItem.textContent = '';
  breadcrumbItem.appendChild(link);
}

breadcrumb.appendChild(breadcrumbItem);


