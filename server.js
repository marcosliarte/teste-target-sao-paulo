const express = require('express');
const app = express();
const port = 3000;

// Função para verificar se um número pertence à sequência de Fibonacci
const isFibonacci = (num) => {
    let a = 0, b = 1;
    while (a < num) {
        [a, b] = [b, a + b];
    }
    return a === num;
};

app.use(express.static('public'));

app.get('/check-fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = isFibonacci(number);
    res.json({ isFibonacci: result });
});

// Adicione rotas para as outras questões aqui

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
