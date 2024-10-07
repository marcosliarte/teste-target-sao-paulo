document.getElementById('loadDataButton')?.addEventListener('click', async () => {
    try {
        const fileInput = document.getElementById('dataFile');
        const file = fileInput.files[0];

        if (!file) {
            alert('Por favor, selecione um arquivo JSON ou XML!');
            return;
        }

        const fileExtension = file.name.split('.').pop();

        let faturamentoMensal;

        if (fileExtension === 'json') {
            const text = await file.text();
            faturamentoMensal = JSON.parse(text);
        } else if (fileExtension === 'xml') {
            const text = await file.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'application/xml');
            faturamentoMensal = parseXML(xmlDoc);
        } else {
            alert('Formato de arquivo não suportado. Selecione um arquivo JSON ou XML.');
            return;
        }

        // Filtra os dias com faturamento (ignora valores 0.0)
        const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

        // Calcula o menor e o maior faturamento
        const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
        const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

        // Calcula a média de faturamento
        const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
        const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

        // Conta o número de dias com faturamento acima da média
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

        // Exibe os resultados
        document.getElementById('minValue').innerText = `Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`;
        document.getElementById('maxValue').innerText = `Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`;
        document.getElementById('averageValue').innerText = `Média de faturamento: R$ ${mediaFaturamento.toFixed(2)}`; // Adicione esta linha
        document.getElementById('daysAboveAverage').innerText = `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`;
        
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        alert('Erro ao carregar os dados.');
    }
});

// Função para parsear o XML e convertê-lo para o mesmo formato que o JSON
const parseXML = (xmlDoc) => {
    const dias = Array.from(xmlDoc.getElementsByTagName('dia'));
    return dias.map(dia => {
        return {
            dia: parseInt(dia.getElementsByTagName('numero')[0].textContent),
            valor: parseFloat(dia.getElementsByTagName('valor')[0].textContent)
        };
    });
};
