function abrirContato() {
  alert("Entre em contato conosco pelo WhatsApp ou formulário!");
  // Exemplo de redirecionamento:
  // window.location.href = "contato.html";
}

function scrollParaDiferenciais() {
  document.getElementById("diferenciais").scrollIntoView({
    behavior: "smooth"
  });
}
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

