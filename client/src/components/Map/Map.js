import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';
import Points from './Points.json';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = () => {
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

    //const popup1 = new mapboxgl.Popup({ offset: 25 }).setText('Test 1');
    
    //const marker = new mapboxgl.Marker().setLngLat([lng,lat]).setPopup(popup1).addTo(map);

    Points.features.forEach(function(marker) {

      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3> ${marker.properties.title} </h3> <h4> ${marker.properties.description} </h4> <img ${marker.properties.image}>`))
        .addTo(map);
    });
    
    





    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen option on the map
    map.addControl(new mapboxgl.FullscreenControl());

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

export default Map;

// Add video to a Popup in a marker :

//setHTML(`<h3> ${marker.properties.title} </h3> <h4> ${marker.properties.description} </h4>  <video controls width="250"> <source src="https://temp.media/video/?height=100&width=200&length=10"
         // type="video/webm"> <source src="https://temp.media/video/?height=100&width=200&length=10" type="video/mp4"> Sorry, your browser doesn't support embedded videos.</video>`))


// Add image in a Popup in a marker : 

//.setHTML(`<h3> ${marker.properties.title} </h3> <h4> ${marker.properties.description} </h4> <img ${marker.properties.image}>`))