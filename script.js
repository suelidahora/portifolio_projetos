function changeLanguage(lang) {
    // Add language switching logic here
    const buttons = document.querySelectorAll('.btn-language');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="changeLanguage('${lang}')"]`).classList.add('active');
// Lógica de redirecionamento
    if (lang === 'en') {
        window.location.href = 'index_en.html'; // Página em inglês
    } else {
        window.location.href = 'index.html'; // Página em português
    }
}
