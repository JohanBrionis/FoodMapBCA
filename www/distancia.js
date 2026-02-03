/* =========================
   CÁLCULOS MATEMÁTICOS (DISTANCIA Y TIEMPO)
========================= */

// Fórmula de Haversine para distancia en KM
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la tierra en km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  const distancia = R * c; // Distancia en km
  return distancia;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

// Estimar tiempo (Velocidad promedio en ciudad: 25km/h para motos/domis)
function estimarTiempoMinutos(distanciaKm) {
  const velocidadPromedio = 25; // km/h
  const tiempoHoras = distanciaKm / velocidadPromedio;
  const tiempoMinutos = Math.round(tiempoHoras * 60);
  
  // Agregamos 10 minutos fijos de preparación/espera
  return tiempoMinutos + 10; 
}

