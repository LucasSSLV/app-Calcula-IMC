//Captura dos elementos
const resultado = document.querySelector(".resultado");
const buttonCalc = document.querySelector(".buttonCalc");

//Funções
function escopoGeral() {
  function calcImc(event) {
    event.preventDefault();

    const valorPeso = document.querySelector(".peso");
    const valorAltura = document.querySelector(".altura");

    const imcFormatado = (
      valorPeso.value /
      (valorAltura.value * valorAltura.value)
    ).toFixed(1);

    valorPeso.value = "";
    valorAltura.value = "";

    let tagResposta =
      (resultado.innerHTML = `<p>Seu IMC é de: ${imcFormatado}</p>`);
    if (valorPeso.value === "" || valorAltura.value === "") {
      return (resultado.innerHTML = `<p>Valores Inválidos!</p>`);
    } else if ((imcFormatado < 18, 5)) {
      return tagResposta;
    } else if ((imcFormatado >= 18, 5 || imcFormatado >= 24, 9)) {
      return tagResposta;
    } else if ((imcFormatado >= 25 || imcFormatado <= 29, 9)) {
      return tagResposta;
    } else if ((imcFormatado >= 30 || imcFormatado <= 34, 9)) {
      return tagResposta;
    } else if ((imcFormatado >= 35 || imcFormatado <= 39, 9)) {
      return tagResposta;
    } else if (imcFormatado >= 40) {
      return tagResposta;
    }
  }

  buttonCalc.addEventListener("click", calcImc);
}

escopoGeral();
