document.getElementById('checkLetterButton')?.addEventListener('click', () => {
    const inputString = document.getElementById('inputString').value;

    if (!inputString) {
        alert('Por favor, insira uma string!');
        return;
    }

    const occurrences = countLetterA(inputString);
    document.getElementById('letterResult').innerText = `A letra 'a' aparece ${occurrences.count} vez(es).`;

    // Destacar a letra 'a' na string
    const highlightedString = inputString.replace(/a/gi, match => `<span class="highlight">${match}</span>`);
    document.getElementById('highlightedString').innerHTML = `String: ${highlightedString}`;
});

// Função para contar a letra 'a' na string
const countLetterA = (str) => {
    const count = (str.match(/a/gi) || []).length; // RegEx para encontrar 'a' e 'A'
    return { count };
};
