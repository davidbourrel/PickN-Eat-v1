import { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleMapMarker from '../../elements/GoogleMap/GoogleMapMarker';
import { GOOGLE_MAP_API_KEY } from '../../../_constants/googleMapApiKey';
import Section from '../../modules/Section';
import RestaurantTable from './RestaurantTable';
import HeaderOne from '../../elements/Headings/HeaderOne';

const Restaurant: FC = () => {
  const [defaultView] = useState({
    center: { lat: 43.574182728669564, lng: 1.4572430485829146 },
    zoom: 11,
  });

  return (
    <Section className='flex-1'>
      <HeaderOne>Plan</HeaderOne>
      <div className='my-6 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div className='h-80'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_MAP_API_KEY,
            }}
            defaultCenter={defaultView.center}
            defaultZoom={defaultView.zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            <GoogleMapMarker
              lat={43.585182728669564}
              lng={1.4572430485829146}
              children='🍔'
            />
          </GoogleMapReact>
        </div>
        <RestaurantTable />
      </div>
    </Section>
  );
};

export default Restaurant;
