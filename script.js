const agora = new Date();
const hora = agora.getHours();

if (hora >= 6 && hora <= 11) {
  document.getElementById("hora").innerHTML = "Bom Dia!";
} else if (hora >= 12 && hora <= 17) {
  document.getElementById("hora").innerHTML = "Boa Tarde!";
} else if (hora >= 18 && hora <= 23) {
  document.getElementById("hora").innerHTML = "Boa Noite!";
} else {
  document.getElementById("hora").innerHTML = "Boa Madrugada!";
}
