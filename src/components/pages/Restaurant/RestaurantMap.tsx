import { FC, useMemo } from 'react';
import { MapContainer, Marker, Tooltip } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
import { Icon, Point } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ItineraryIcon from '../../images/icons/ItineraryIcon';

const RestaurantMap: FC = () => {
  const position: [number, number] = [43.597539595572556, 1.4307798046657012];

  const markerIcon = new Icon({
    iconUrl: '/img/pinIcon.svg',
    iconRetinaUrl: '/img/pinIcon.svg',
    iconSize: new Point(73, 79),
    iconAnchor: new Point(36.5, 55),
  });

  const styleUrl = useMemo(
    () =>
      `${process.env.REACT_APP_MAPTILER_URL}/style.json?key=${process.env.REACT_APP_MAPTILER_ACCESS_TOKEN}`,
    []
  );
  const tooltipOffset = useMemo(() => new Point(0, -45), []);

  return (
    <div className='h-80 w-full'>
      <MapContainer center={position} zoom={13} className='w-full h-full'>
        <VectorTileLayer styleUrl={styleUrl} />
        <Marker position={position} icon={markerIcon}>
          <Tooltip
            permanent
            direction='top'
            interactive
            opacity={1}
            offset={tooltipOffset}
          >
            <div className='flex flex-col items-center py-2 px-3'>
              <h5 className='text-red-800 text-center font-semibold mb-2 text-xs xxs:text-sm'>
                PickN'Eat
              </h5>
              <a
                target='_blank'
                href='https://www.google.fr'
                className='flex items-center'
                rel='noreferrer'
              >
                <span className='mr-1'>
                  <ItineraryIcon />
                </span>
                <span>Itinerary</span>
              </a>
            </div>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RestaurantMap;
