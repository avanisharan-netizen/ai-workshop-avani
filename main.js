// main.js – European Space Network map
// Fixed version: Data embedded directly to bypass local file security (CORS)

const europeSpaceData = [
  {
    "name": "Cebreros Station",
    "type": "Ground Station",
    "country": "Spain",
    "agency": "ESA",
    "lat": 40.2817,
    "lng": -4.4425,
    "website": "https://www.esa.int/Our_Activities/Operations/Cebreros_Station"
  },
  {
    "name": "Kiruna Station",
    "type": "Ground Station",
    "country": "Sweden",
    "agency": "Swedish Space Agency",
    "lat": 67.8558,
    "lng": 20.2250,
    "website": "https://www.ssa.se/en/"
  },
  {
    "name": "Kourou Spaceport",
    "type": "Launch Site",
    "country": "France",
    "agency": "CNES",
    "lat": 5.2390,
    "lng": -52.7680,
    "website": "https://cnes.fr/en/kourou-spaceport"
  },
  {
    "name": "Guiana Space Centre",
    "type": "Launch Site",
    "country": "France",
    "agency": "ESA",
    "lat": 5.2360,
    "lng": -52.7680,
    "website": "https://www.esa.int/Our_Activities/Launchers/Guiana_Space_Centre"
  },
  {
    "name": "Munich Ground Station",
    "type": "Ground Station",
    "country": "Germany",
    "agency": "DLR",
    "lat": 48.1351,
    "lng": 11.5820,
    "website": "https://www.dlr.de/"
  },
  {
    "name": "Bologna Satellite Facility",
    "type": "Ground Station",
    "country": "Italy",
    "agency": "ASI",
    "lat": 44.4949,
    "lng": 11.3426,
    "website": "https://www.asi.it/"
  },
  {
    "name": "Newport Ground Station",
    "type": "Ground Station",
    "country": "United Kingdom",
    "agency": "UK Space Agency",
    "lat": 51.5842,
    "lng": -3.1435,
    "website": "https://www.gov.uk/government/organisations/uk-space-agency"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize map centered on Europe
  const map = L.map('map').setView([50, 10], 4);

  // Tile layers – light and dark variants
  const lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  });
  const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors & CartoDB'
  });

  // Apply initial theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  (currentTheme === 'dark' ? darkTiles : lightTiles).addTo(map);

  // Theme toggle button
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') {
      map.removeLayer(lightTiles);
      darkTiles.addTo(map);
    } else {
      map.removeLayer(darkTiles);
      lightTiles.addTo(map);
    }
  });

  // Render station markers from the embedded data object
  europeSpaceData.forEach(fac => {
    const marker = L.marker([fac.lat, fac.lng]).addTo(map);
    const popupHtml = `
      <div style="font-family: 'Inter', sans-serif; padding: 5px;">
        <h3 style="margin: 0 0 5px 0; font-size: 1.1rem; color: var(--accent-color);">${fac.name}</h3>
        <p style="margin: 3px 0; font-size: 0.9rem;"><strong>Type:</strong> ${fac.type}</p>
        <p style="margin: 3px 0; font-size: 0.9rem;"><strong>Agency:</strong> ${fac.agency}</p>
        <p style="margin: 3px 0; font-size: 0.9rem;"><strong>Country:</strong> ${fac.country}</p>
        <a href="${fac.website}" target="_blank" style="display: inline-block; margin-top: 8px; color: #3b82f6; text-decoration: none; font-weight: 600;">Visit Official Website →</a>
      </div>
    `;
    marker.bindPopup(popupHtml);
  });

  // Force a map resize check to ensure it fills the container correctly
  setTimeout(() => {
    map.invalidateSize();
  }, 200);
});
