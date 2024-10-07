document.getElementById('checkFibonacciButton')?.addEventListener('click', async () => {
    const numberInput = document.getElementById('fibonacciInput').value;
    
    if (!numberInput) {
        alert('Por favor, insira um número!');
        return;
    }

    const response = await fetch(`/check-fibonacci/${numberInput}`);
    const result = await response.json();

    // Exibir a sequência de Fibonacci e destacar o número inserido
    const sequence = getFibonacciSequence(parseInt(numberInput));
    const highlightedSequence = sequence.map(num => num === parseInt(numberInput) ? `<span class="highlight">${num}</span>` : num).join(', ');
    
    document.getElementById('fibonacciResult').innerText = result.isFibonacci 
        ? `${numberInput} pertence à sequência de Fibonacci.` 
        : `${numberInput} não pertence à sequência de Fibonacci.`;

    document.getElementById('fibonacciSequence').innerHTML = `Sequência: ${highlightedSequence}`;
});


const getFibonacciSequence = (max) => {
    let sequence = [];
    let a = 0, b = 1;

    while (a <= max) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }

    return sequence;
};