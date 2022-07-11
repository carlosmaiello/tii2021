module.exports = (peso, altura) => {
    if (altura == 0) return 0;
    return Math.round((peso / (altura * altura)) * 100) / 100;
}
