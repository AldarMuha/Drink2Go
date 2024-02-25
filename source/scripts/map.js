const mapContainer = document.querySelector('.map__container');
mapContainer.classList.remove('map__container--nojs');
const map = L.map('map')
  .setView({
    lat: 59.96848,
    lng: 30.3165,
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl: './images/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [38, 50],
});

const marker = L.marker(
  {
    lat: 59.96838,
    lng: 30.31764,
  },
  {
    draggable: true,
    icon: pinIcon,
  },
);

marker.addTo(map);
