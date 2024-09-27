import React, { useEffect } from 'react';

const GoogleMapsComponent = () => {
  useEffect(() => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Load Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    // Initialize the map once the script is loaded
    window.initMap = function() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    return () => {
      // Clean up the script
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default GoogleMapsComponent;
