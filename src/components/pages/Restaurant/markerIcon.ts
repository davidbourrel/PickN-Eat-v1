import { Icon, Point } from 'leaflet';

const markerIcon = new Icon({
  iconUrl: '/img/pinIcon.svg',
  iconRetinaUrl: '/img/pinIcon.svg',
  iconSize: new Point(73, 79),
  iconAnchor: new Point(36.5, 55),
});

export default markerIcon;
