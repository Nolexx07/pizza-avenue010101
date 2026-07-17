$(document).ready(function() {
    var mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Center coordinates for the restaurant (Sainikpuri, Secunderabad, India)
    var lat = 17.48512;
    var lng = 78.54423;

    // Initialize Leaflet map
    var map = L.map('map', {
        scrollWheelZoom: false
    }).setView([lat, lng], 15);

    // Use premium CartoDB Dark Matter tiles to match the premium dark theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Custom pizza marker icon using flaticon stylesheet already loaded in page
    var pizzaIcon = L.divIcon({
        className: 'custom-pizza-marker',
        html: '<span class="flaticon-pizza-1" style="font-size: 32px; color: #fac564; display: block; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));"></span>',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });

    // Add marker to map
    L.marker([lat, lng], { icon: pizzaIcon }).addTo(map)
        .bindPopup('<b style="color: #1e1812; font-family:\'Plus Jakarta Sans\', sans-serif;">Pizza Avenue</b><br><span style="color: #666; font-size: 11px;">Plot 807, Ground Floor, Opp. Hyjack Drive, Sainikpuri</span>')
        .openPopup();
});