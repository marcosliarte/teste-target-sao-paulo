document.getElementById('checkAnswersButton')?.addEventListener('click', () => {
    let results = [];

    const correctAnswers = {
        a: { answer: 9, explanation: "A sequência é a soma do número anterior mias 2." },
        b: { answer: 128, explanation: "A sequência é a multiplicação do número anterior por 2." },
        c: { answer: 49, explanation: "A sequência é o quadrado dos números inteiros." },
        d: { answer: 100, explanation: "A sequência é o quadrado dos números pares." },
        e: { answer: 13, explanation: "A sequência de Fibonacci." },
        f: { answer: 200, explanation: "A sequência são números que começam com a letra 'D'. Dois, Dez, Doze, Dezesseis, Dezessete, Dezoito, Dezenove e a letra 'D' só volta a aparecer no Duzentos." },
    };

    // Verificar cada resposta e atualizar a interrogação
    for (const [key, { answer, explanation }] of Object.entries(correctAnswers)) {
        // Atualiza a interrogação para a resposta correta
        document.getElementById(`result${key.toUpperCase()}`).innerText = answer;
        // Adiciona a explicação ao resultado
        results.push(`Resposta ${key}) A resposta correta é ${answer}. Como cheguei a essa resposta: ${explanation}`);
    }

    document.getElementById('results').innerHTML = results.join('<br>');
});
