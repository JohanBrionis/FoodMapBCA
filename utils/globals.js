
// FADE-IN AL CARGAR
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade");

    setTimeout(() => {
        document.body.classList.remove("hidden");
    }, 50);
});

// FADE-OUT AL CAMBIAR DE PAGINA
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;

    const url = link.getAttribute("href");
    if (!url || url.startsWith("#") || url.startsWith("javascript")) return;

    e.preventDefault();

    // animación de salida
    document.body.classList.add("hidden");

    setTimeout(() => {
        window.location.href = url;
    }, 350);
});

