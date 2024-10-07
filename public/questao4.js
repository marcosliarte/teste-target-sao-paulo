const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

// Calcula o total de faturamento
const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Cria os dados para o gráfico
const labels = Object.keys(faturamentoPorEstado);
const valores = Object.values(faturamentoPorEstado);
const percentuais = valores.map(valor => ((valor / totalFaturamento) * 100).toFixed(2));


const resultadoDiv = document.getElementById('resultado');
labels.forEach((estado, index) => {
    resultadoDiv.innerHTML += `${estado}: R$ ${valores[index].toFixed(2)} (${percentuais[index]}%)<br>`;
});


const ctx = document.getElementById('faturamentoChart').getContext('2d');
const faturamentoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Faturamento por Estado (R$)',
            data: valores,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Faturamento (R$)'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const percentual = percentuais[tooltipItem.dataIndex];
                        return `${tooltipItem.label}: R$ ${tooltipItem.raw.toFixed(2)} (${percentual}%)`;
                    }
                }
            }
        }
    }
});
