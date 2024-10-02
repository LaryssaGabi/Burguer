const formatCurrency = (value) => {
    if (typeof value === 'number' && !isNaN(value)) {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
    return 'R$ 0,00'; 
};

export default formatCurrency;
