document.querySelectorAll('.toggle-text').forEach(button => {
    button.addEventListener('click', function() {
        const additionalText = this.nextElementSibling;
        if (additionalText.classList.contains('show')) {
            additionalText.classList.remove('show');
            this.textContent = 'Více';
        } else {
            document.querySelectorAll('.additional-text.show').forEach(text => {
                text.classList.remove('show');
                text.previousElementSibling.textContent = 'More Info';
            });
            additionalText.classList.add('show');
            this.textContent = 'Méně';
        }
    });
});
