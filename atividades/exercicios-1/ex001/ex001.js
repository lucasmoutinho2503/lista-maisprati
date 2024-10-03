function ex001(n) {
    if (n % 2 === 0) {
        document.getElementById("resultado").textContent = `${n} é par!`;
    }  else {
        document.getElementById("resultado").textContent = `${n} é impar!`;
    }
}
const lerEntrada = document.getElementById('entrada');
const saida = lerEntrada.getAttribute(lerEntrada);
const botaoVerificar = document.getElementById('verificar');
botaoVerificar.onclick = ex001(saida);
