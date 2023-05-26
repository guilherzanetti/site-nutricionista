//HEADER RESPONSIVO

const btnHeaderResponsive = document.querySelector('.btn-header-responsive');
const responsiveOptions = document.querySelector('.responsive-options');

btnHeaderResponsive.addEventListener('click', () => {
    responsiveOptions.classList.toggle('show');
});


// Saiba mais - Saiba menos

function toggleExpand() {
    var expandText = document.getElementById("expand");
    var lerMaisLink = document.getElementById("ler-mais");

    if (expandText.style.display === "none") {
        event.preventDefault();
        expandText.style.display = "inline";
        lerMaisLink.textContent = "Ler menos";
    } else {
        event.preventDefault();
        expandText.style.display = "none";
        lerMaisLink.textContent = "Ler mais";
    }
}