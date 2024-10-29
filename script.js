let currentPage = 1; // Iniziamo con la pagina 1 (copertina)

document.body.addEventListener('click', (event) => {
    const bookContainer = document.querySelector('.book-container');
    if (event.clientX < window.innerWidth / 2) {
        // Cliccato a sinistra
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    } else {
        // Cliccato a destra
        if (currentPage < 4) { // 4 è il numero totale di pagine
            currentPage++;
            updatePage();
        }
    }
});

function updatePage() {
    const bookContainer = document.querySelector('.book-container');
    bookContainer.style.transform = `translateX(-${currentPage * 100}%)`;
}
