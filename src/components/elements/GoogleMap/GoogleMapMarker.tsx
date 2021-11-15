import { FC, PropsWithChildren } from 'react';

interface FGoogleMarkerProps {
  lat: number;
  lng: number;
}

const GoogleMapMarker: FC<PropsWithChildren<FGoogleMarkerProps>> = ({
  children,
}) => (
  <div className='absolute w-10 h-10 top-1/2 left-1/2 border-4 border-red-500 rounded-full text-center bg-white font-bold text-blue-500 text-xl'>
    {children}
  </div>
);

export default GoogleMapMarker;
