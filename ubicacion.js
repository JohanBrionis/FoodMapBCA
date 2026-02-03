/* ==========================================
   ARCHIVO: ubicacion.js
   DESCRIPCIÓN: Gestiona el GPS y notifica cambios
   ========================================== */

// Variable global accesible desde cualquier archivo
window.userCoords = null; 

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // 1. Guardamos la ubicación
      window.userCoords = { lat, lng };

      // 2. DISPARAMOS UN EVENTO para que categoria.html se entere
      window.dispatchEvent(new CustomEvent('ubicacionActualizada', { 
        detail: { lat, lng } 
      }));

      // 3. (Opcional) Si estás en la página del mapa, actualizamos el marcador azul
      // Esta parte verifica si 'map' y 'L' (Leaflet) existen antes de intentar dibujar
      if (typeof map !== 'undefined' && typeof L !== 'undefined') {
         actualizarMarcadorMapa(lat, lng);
      }
    },
    error => {
      console.warn("GPS no disponible o permiso denegado");
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
  );
}

// Función auxiliar para dibujar en el mapa (si estamos en home.html)
let userMarker = null;
let accuracyHalo = null;

function actualizarMarcadorMapa(lat, lng) {
    const userLatLng = [lat, lng];

    if (!userMarker) {
        userMarker = L.marker(userLatLng, {
            icon: L.divIcon({
                className: "user-location",
                html: `<div class="dot"></div>`,
                iconSize: [18, 18],
                iconAnchor: [9, 9]
            })
        }).addTo(map);

        accuracyHalo = L.circleMarker(userLatLng, {
            radius: 18, color: "#1a73e8", fillColor: "#1a73e8",
            fillOpacity: 0.2, weight: 2
        }).addTo(map);
    } else {
        userMarker.setLatLng(userLatLng);
        accuracyHalo.setLatLng(userLatLng);
    }
}