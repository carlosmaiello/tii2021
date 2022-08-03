
function areaTriangulo(base, altura) {
    if (base < 0 || altura < 0) return 0;
    return (base * altura) / 2;
}

function areaRetangulo(base, altura) {}

// Área do Quadrado
// Área do Círculo

module.exports = {
    areaTriangulo,
    areaRetangulo
}