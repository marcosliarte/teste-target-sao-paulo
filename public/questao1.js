document.getElementById('calculateSumButton')?.addEventListener('click', () => {
    const INDICE = 13;
    let SOMA = 0;
    let K = 0;
    let steps = [];


    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
        steps.push(`K = ${K}, SOMA = ${SOMA}`);
    }


    document.getElementById('sumResult').innerText = `O valor final da variável SOMA é: ${SOMA}`;


    document.getElementById('stepByStep').innerHTML = `<h3>Passo a Passo:</h3><ul>${steps.map(step => `<li>${step}</li>`).join('')}</ul>`;
});
