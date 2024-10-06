document.getElementById('calculateSumButton')?.addEventListener('click', () => {
    const INDICE = 12;
    let SOMA = 0;
    let K = 1;
    let steps = [];

    // Loop para calcular a soma e registrar os passos
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
        steps.push(`K = ${K}, SOMA = ${SOMA}`);
    }

    // Exibe o resultado final
    document.getElementById('sumResult').innerText = `O valor final da variável SOMA é: ${SOMA}`;

    // Exibe o passo a passo do cálculo
    document.getElementById('stepByStep').innerHTML = `<h3>Passo a Passo:</h3><ul>${steps.map(step => `<li>${step}</li>`).join('')}</ul>`;
});
