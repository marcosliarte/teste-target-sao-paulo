document.getElementById('invertButton').addEventListener('click', () => {
    const inputString = document.getElementById('inputString').value;


    const invertedString = invertString(inputString);


    document.getElementById('result').innerText = `String invertida: ${invertedString}`;
});

// Função para inverter a string
function invertString(str) {
    let inverted = '';
    
   
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }

    return inverted;
}
