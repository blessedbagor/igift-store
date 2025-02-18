// 'use client';

// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import 'leaflet/dist/leaflet.css';
// import { LatLngTuple, Icon } from 'leaflet';
// import { Card } from '@/components/ui/card';

// // Dynamically import MapContainer and its children
// const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// const locations: { name: string; coords: LatLngTuple }[] = [
//   { name: 'Provincial Stockist - Aklan', coords: [11.701, 122.370] },
//   { name: 'Town Stockist - Pontevedra, Capiz', coords: [11.507, 122.839] },
//   { name: 'Town Stockist - Catanduanes', coords: [13.8357, 124.2471] },
//   { name: 'Mobile Stockist - Hong Kong', coords: [22.26672, 114.16735] },
//   { name: 'Main Office - Iloilo City', coords: [10.720, 122.562] },
// ];

// const customIcon = new Icon({
//   iconUrl: '/images/map-marker.png',
//   iconSize: [40, 40],  // Size of the pin image
//   iconAnchor: [20, 40],  // Adjust the anchor to the bottom center of the icon
//   popupAnchor: [0, -40],  // Position the popup correctly above the pin
// });

export default function PhilippinesMap() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Prevents SSR issues

  return (
    <>
      {/* <div>
        <h1 className='text-center text-5xl md:text-9xl mt-12'>Center</h1>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-6xl p-4" style={{ height: '80vh' }}>
          <MapContainer
            center={[12.8797, 121.774]}
            zoom={6}
            style={{
              height: '100%',
              width: '100%',
              padding: '0',
              boxSizing: 'border-box',
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location, index) => (
              <Marker key={index} position={location.coords} icon={customIcon}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card>
      </div> */}
    </>
  );
}
