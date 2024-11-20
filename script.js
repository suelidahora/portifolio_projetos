function changeLanguage(lang) {
    // Add language switching logic here
    const buttons = document.querySelectorAll('.btn-language');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="changeLanguage('${lang}')"]`).classList.add('active');
}