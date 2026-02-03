// ==========================================
//  Nav.js - Barra de Navegación (Adaptada para AdMob)
// ==========================================

document.body.classList.add('fade-in-body');
setTimeout(() => {
    document.body.classList.remove('fade-in-body');
}, 100);

const navStyles = `
<style>
    .fade-in-body { opacity: 0; }
    body { transition: opacity 0.3s ease; }

    .app-nav {
        background-color: #ffffff;
        z-index: 10000; 
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    /* === ESCRITORIO (Sin cambios) === */
    @media (min-width: 769px) {
        .app-nav {
            position: fixed; top: 0; left: 0; width: 240px; height: 100vh;
            border-right: 1px solid #eee; padding: 30px 20px;
            display: flex; flex-direction: column; box-shadow: 2px 0 10px rgba(0,0,0,0.02);
        }
        .nav-logo { font-size: 24px; font-weight: 800; color: #ff5722; margin-bottom: 40px; padding-left: 10px; }
        .nav-item { display: flex; align-items: center; padding: 12px 15px; margin-bottom: 8px; border-radius: 12px; text-decoration: none; color: #555; transition: 0.2s; font-weight: 500; }
        .nav-item:hover { background-color: #f5f5f5; }
        .nav-item svg { width: 24px; height: 24px; margin-right: 15px; fill: #888; transition: 0.2s; }
        .nav-item.active { background-color: #ff572215; color: #ff5722; }
        .nav-item.active svg { fill: #ff5722; }
        body { padding-left: 240px; }
    }

    /* === MÓVIL (AQUÍ ESTÁ EL CAMBIO) === */
    @media (max-width: 768px) {
        .app-nav {
            position: fixed;
            /* CAMBIO: Lo subimos 50px (altura del banner estándar) */
            bottom: 50px; 
            left: 0;
            width: 100%;
            height: 60px; /* Altura de la barra */
            background: #ffffff; /* Asegurar fondo blanco */
            border-top: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0; /* Separador con el anuncio */
            display: flex;
            justify-content: space-around;
            align-items: center;
            /* Sombra hacia arriba para separar del contenido */
            box-shadow: 0 -4px 10px rgba(0,0,0,0.03); 
        }

        .nav-logo { display: none; }

        .nav-item {
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            text-decoration: none; width: 100%; height: 100%; color: #999;
            font-size: 10px; font-weight: 600;
        }

        .nav-item svg { width: 24px; height: 24px; margin-bottom: 4px; fill: #999; transition: 0.2s; }
        .nav-item:active { transform: scale(0.95); }
        .nav-item.active { color: #ff5722; }
        .nav-item.active svg { fill: #ff5722; transform: translateY(-2px); }

        /* Ajuste CRÍTICO del cuerpo */
        /* 60px (Nav) + 50px (Anuncio) + 20px (Aire) = 130px */
        body { padding-bottom: 130px !important; } 
    }
</style>
`;

const currentPath = window.location.pathname;
const isHome = currentPath.includes('index.html') || currentPath === '/';
const isCat = currentPath.includes('categorias');

const navHTML = `
<nav class="app-nav">
    <div class="nav-logo">FoodMap Bca</div>

    <a href="index.html" class="nav-item ${isHome ? 'active' : ''}">
        <svg viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>
        <span>Mapa</span>
    </a>

    <a href="categorias.html" class="nav-item ${isCat ? 'active' : ''}">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5 2.5 2.5z"/></svg>
        <span>Explorar</span>
    </a>
</nav>
`;

document.head.insertAdjacentHTML('beforeend', navStyles);
document.body.insertAdjacentHTML('afterbegin', navHTML);