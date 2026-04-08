// main.js – European Space Network & Agency Directory
// Data embedded directly to bypass local file security (CORS)

const europeSpaceData = [
  { "name": "Cebreros Station", "type": "Ground Station", "country": "Spain", "agency": "ESA", "lat": 40.2817, "lng": -4.4425, "website": "https://www.esa.int/Our_Activities/Operations/Cebreros_Station" },
  { "name": "Kiruna Station", "type": "Ground Station", "country": "Sweden", "agency": "Swedish Space Agency", "lat": 67.8558, "lng": 20.2250, "website": "https://www.ssa.se/en/" },
  { "name": "Kourou Spaceport", "type": "Launch Site", "country": "France", "agency": "CNES", "lat": 5.2390, "lng": -52.7680, "website": "https://cnes.fr/en/kourou-spaceport" },
  { "name": "Guiana Space Centre", "type": "Launch Site", "country": "France", "agency": "ESA", "lat": 5.2360, "lng": -52.7680, "website": "https://www.esa.int/Our_Activities/Launchers/Guiana_Space_Centre" },
  { "name": "Munich Ground Station", "type": "Ground Station", "country": "Germany", "agency": "DLR", "lat": 48.1351, "lng": 11.5820, "website": "https://www.dlr.de/" },
  { "name": "Bologna Satellite Facility", "type": "Ground Station", "country": "Italy", "agency": "ASI", "lat": 44.4949, "lng": 11.3426, "website": "https://www.asi.it/" },
  { "name": "Newport Ground Station", "type": "Ground Station", "country": "United Kingdom", "agency": "UK Space Agency", "lat": 51.5842, "lng": -3.1435, "website": "https://www.gov.uk/government/organisations/uk-space-agency" }
];

const agencyHqData = [
  { "id": "austria", "name": "FFG (ALR)", "city": "Vienna", "country": "Austria", "address": "Sensengasse 1, 1090 Wien", "lat": 48.2195, "lng": 16.3572 },
  { "id": "belgium", "name": "BELSPO", "city": "Brussels", "country": "Belgium", "address": "Avenue Louise 231, 1050 Bruxelles", "lat": 50.8265, "lng": 4.3685 },
  { "id": "czech", "name": "Ministry of Transport", "city": "Prague", "country": "Czech Republic", "address": "nábř. L. Svobody 1222/12, 110 15 Nové Město", "lat": 50.0915, "lng": 14.4335 },
  { "id": "denmark", "name": "Danish Agency for HE&S", "city": "Copenhagen", "country": "Denmark", "address": "Bredgade 40, 1260 København K", "lat": 55.6828, "lng": 12.5894 },
  { "id": "estonia", "name": "Estonian Space Office", "city": "Tallinn", "country": "Estonia", "address": "Sepise 7, 11415 Tallinn", "lat": 59.4215, "lng": 24.7935 },
  { "id": "finland", "name": "Business Finland", "city": "Helsinki", "country": "Finland", "address": "Porkkalankatu 1, 00180 Helsinki", "lat": 60.1638, "lng": 24.9125 },
  { "id": "france", "name": "CNES", "city": "Paris", "country": "France", "address": "2 Place Maurice Quentin, 75001 Paris", "lat": 48.8612, "lng": 2.3468 },
  { "id": "germany", "name": "DLR", "city": "Cologne", "country": "Germany", "address": "Linder Höhe, 51147 Köln", "lat": 50.8525, "lng": 7.1325 },
  { "id": "greece", "name": "Hellenic Space Center", "city": "Athens", "country": "Greece", "address": "Ag. Paraskevi 153 41", "lat": 38.0055, "lng": 23.8245 },
  { "id": "hungary", "name": "MFA Space Hungarian", "city": "Budapest", "country": "Hungary", "address": "Bem rkp. 47, 1027", "lat": 47.5098, "lng": 19.0392 },
  { "id": "ireland", "name": "Enterprise Ireland", "city": "Dublin", "country": "Ireland", "address": "The Plaza, East Point Business Park", "lat": 53.3592, "lng": -6.2238 },
  { "id": "italy", "name": "ASI", "city": "Rome", "country": "Italy", "address": "Via del Politecnico snc, 00133 Roma", "lat": 41.8545, "lng": 12.6245 },
  { "id": "luxembourg", "name": "LSA", "city": "Luxembourg", "country": "Luxembourg", "address": "West Side Village, 8080 Bertrange", "lat": 49.6110, "lng": 6.0520 },
  { "id": "netherlands", "name": "NSO", "city": "The Hague", "country": "Netherlands", "address": "Prinses Beatrixlaan 2, 2595 AL Den Haag", "lat": 52.0815, "lng": 4.3315 },
  { "id": "norway", "name": "Norwegian Space Agency", "city": "Oslo", "country": "Norway", "address": "Drammensveien 165, 0277 Oslo", "lat": 59.9215, "lng": 10.6785 },
  { "id": "poland", "name": "POLSA", "city": "Gdańsk", "country": "Poland", "address": "Trzy Lipy 3, 80-172 Gdańsk", "lat": 54.3515, "lng": 18.5915 },
  { "id": "portugal", "name": "Portugal Space", "city": "Lisbon", "country": "Portugal", "address": "Estrada das Laranjeiras 205", "lat": 38.7465, "lng": -9.1675 },
  { "id": "romania", "name": "ROSA", "city": "Bucharest", "country": "Romania", "address": "Str. Mendeleev nr. 21-25", "lat": 44.4445, "lng": 26.0965 },
  { "id": "spain", "name": "Spanish Space Agency (AEE)", "city": "Seville", "country": "Spain", "address": "Edificio CREA, C. Torneo, 67", "lat": 37.4045, "lng": -5.9985 },
  { "id": "sweden", "name": "SNSA", "city": "Solna", "country": "Sweden", "address": "Hemvärnsgatan 15", "lat": 59.3495, "lng": 17.9815 },
  { "id": "switzerland", "name": "Swiss Space Office", "city": "Bern", "country": "Switzerland", "address": "Einsteinstrasse 2, 3003 Bern", "lat": 46.9425, "lng": 7.4525 },
  { "id": "uk", "name": "UK Space Agency", "city": "Swindon", "country": "United Kingdom", "address": "North Star Ave, SN2 1SZ", "lat": 51.5645, "lng": -1.7855 }
];

document.addEventListener('DOMContentLoaded', () => {
    // Theme logic
    const toggleBtn = document.getElementById('theme-toggle');
    const updateTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (map) {
            map.removeLayer(theme === 'dark' ? lightTiles : darkTiles);
            (theme === 'dark' ? darkTiles : lightTiles).addTo(map);
        }
    };
    
    toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        updateTheme(current === 'light' ? 'dark' : 'light');
    });

    // Initialize Map
    const map = L.map('map').setView([50, 10], 4);
    const lightTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OSM contributors' });
    const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; CartoDB' });
    
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
    (initialTheme === 'dark' ? darkTiles : lightTiles).addTo(map);

    // Store markers to trigger popups externally
    const markers = {};

    // Render Physical Infrastructure (Stations/Spaceports)
    europeSpaceData.forEach(fac => {
        L.marker([fac.lat, fac.lng]).addTo(map).bindPopup(`
            <div style="font-family: 'Inter', sans-serif;">
                <h3 style="margin:0;color:var(--accent-color);">${fac.name}</h3>
                <p style="margin:5px 0;">${fac.type} | ${fac.country}</p>
                <a href="${fac.website}" target="_blank" style="color:#3b82f6;text-decoration:none;">Details →</a>
            </div>
        `);
    });

    // Render Agency HQs on Map
    const agencyIcon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#8b5cf6;width:12px;height:12px;border-radius:50%;border:2px solid white;'></div>",
        iconSize: [12, 12],
        iconAnchor: [6, 6]
    });

    agencyHqData.forEach(hq => {
        const marker = L.marker([hq.lat, hq.lng], { icon: agencyIcon }).addTo(map).bindPopup(`
            <div style="font-family: 'Inter', sans-serif;">
                <h3 style="margin:0;color:#8b5cf6;">${hq.name} HQ</h3>
                <p style="margin:5px 0;">${hq.city}, ${hq.country}</p>
                <small>${hq.address}</small>
            </div>
        `);
        markers[hq.id] = marker;
    });

    // Render Data Table
    const tableBody = document.getElementById('hq-table-body');
    agencyHqData.forEach(hq => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${hq.name}</strong></td>
            <td>${hq.city}</td>
            <td>${hq.country}</td>
            <td><small>${hq.address}</small></td>
            <td><span class="coord-tag">${hq.lat.toFixed(3)}, ${hq.lng.toFixed(3)}</span></td>
        `;
        
        // Add click listener for automatic pan/zoom
        row.addEventListener('click', () => {
            map.flyTo([hq.lat, hq.lng], 8, {
                animate: true,
                duration: 1.5
            });
            
            // Open marker popup after small delay to allow for flying
            setTimeout(() => {
                const marker = markers[hq.id];
                if (marker) marker.openPopup();
            }, 1000);
        });
        
        tableBody.appendChild(row);
    });

    setTimeout(() => map.invalidateSize(), 200);
});
