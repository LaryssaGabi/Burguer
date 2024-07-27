export default function FormatDate() {
    const date = new Date();
    return date.toLocaleString('pt-BR', {
        year: '2-digit',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });
}
