<script>
const botao = document.getElementById("botao-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");

// Começa oculto
opcoes.style.display = "none";

botao.addEventListener("click", () => {
if (opcoes.style.display === "none") {
opcoes.style.display = "flex";
} else {
opcoes.style.display = "none";
}
});
</script>
