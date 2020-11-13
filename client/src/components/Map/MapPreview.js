import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapPreview.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const MapPreview = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(3.523485);
  const [lat, setLat] = useState(50.357932);
  const [zoom, setZoom] = useState(13);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/n2norme/ckgwip7xe182w1ar5e6kz0ovn',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
        <div className='map-container' ref={mapContainerRef} />
  );
};

export default MapPreview;
