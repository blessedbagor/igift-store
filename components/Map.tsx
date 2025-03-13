"use client";

import React, { useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {
  IconPhone,
  IconClock,
  IconCalendar,
  IconX,
  IconSearch,
} from "@tabler/icons-react";
import { Store } from "@/types";

type MapProps = {
  center: [number, number];
  zoom?: number;
  stores: Store[];
};

// Component to handle map centering when clicking a store
const SetViewOnClick: React.FC<{ coords: [number, number] }> = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 15); // Zoom in when clicking a store
  return null;
};

const Map: React.FC<MapProps> = ({ center, zoom = 4, stores }) => {
  const [search, setSearch] = useState("");
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mapRef = useRef<any>(null);

  // Sort stores alphabetically
  const sortedStores = useMemo(() => {
    return [...stores].sort((a, b) => a.name.localeCompare(b.name));
  }, [stores]);

  // Filter stores when searching
  const filteredStores = useMemo(() => {
    return sortedStores.filter(
      (store) =>
        store.name.toLowerCase().includes(search.toLowerCase()) ||
        store.address.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedStores]);

  // Handle clicking on a store from the sidebar
  const handleStoreClick = (coords: [number, number]) => {
    setSelectedCoords(coords);
    if (mapRef.current) {
      mapRef.current.setView(coords, 15);
    }
    // Hide sidebar on mobile when a store is selected
    setIsSidebarOpen(false);
  };

  // Sidebar content (used in both desktop and mobile views)
  const sidebarContent = (
    <div className="w-80 shadow-lg p-4 overflow-y-auto">
      {/* Close button for mobile */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-lg font-semibold">
          iGift Centers: {filteredStores.length}
        </h2>
        <button onClick={() => setIsSidebarOpen(false)}>
          <IconX size={24} />
        </button>
      </div>
      <input
        type="text"
        placeholder="Search iGift Center..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      {/* Title for larger screens */}
      <h2 className="text-lg font-semibold mb-2 hidden md:block">
        iGift Centers: {filteredStores.length}
      </h2>

      <ul>
        {filteredStores.map((store) => (
          <li
            key={store.id}
            className="cursor-pointer p-2 border-b hover:bg-yellow-300 hover:text-black"
            onClick={() => handleStoreClick(store.coordinates)}
          >
            {store.name}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">{sidebarContent}</div>

      {/* Hamburger icon for mobile (moved to right side) */}
      <button
        className="absolute top-4 right-4 z-[4000] md:hidden p-2 rounded shadow bg-white"
        onClick={() => setIsSidebarOpen(true)}
      >
        <IconSearch size={24} className="text-black" />
      </button>

      {/* Mobile Sidebar Overlay with high z-index */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[6000] flex items-center justify-center md:hidden bg-black bg-opacity-50">
            <div className="w-80 shadow-lg overflow-y-auto bg-neutral-900 rounded-lg">
            {sidebarContent}
            </div>
        </div>
        )}


      {/* Map Section */}
      <div className="flex-1 md:m-2">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "100vh", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          <MarkerClusterGroup chunkedLoading>
            {stores.map((store) => (
              <Marker key={store.id} position={store.coordinates}>
                <Popup>
                  <div className="p-2 w-64">
                    {/* Store Name */}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {store.name}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <p className="text-sm text-gray-700">{store.address}</p>
                    </div>

                    {/* Clickable Phone Number */}
                    <div className="flex items-center gap-2">
                      <IconPhone size={18} className="text-gold" />
                      <a href={`tel:${store.mobile}`} className="text-sm hover:underline">
                        {store.mobile}
                      </a>
                    </div>

                    {/* Office Hours */}
                    <div className="flex items-center gap-2">
                      <IconClock size={18} className="text-gold" />
                      <p className="text-sm text-gray-700">{store.officeHours}</p>
                    </div>

                    {/* Business Days */}
                    <div className="flex items-center gap-2">
                      <IconCalendar size={18} className="text-gold" />
                      <p className="text-sm text-gray-700">{store.businessDays}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>

          {/* Update map center when a store is clicked */}
          {selectedCoords && <SetViewOnClick coords={selectedCoords} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
