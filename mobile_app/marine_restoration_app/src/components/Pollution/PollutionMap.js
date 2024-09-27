// src/components/Pollution/PollutionMap.js

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const PollutionMap = () => {
  const [pollutionData, setPollutionData] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Default center for the map (can be updated dynamically)
  const defaultCenter = {
    lat: 20.5937,   // Centered at India as an example
    lng: 78.9629
  };

  // Map container style
  const mapStyles = {
    height: '70vh',
    width: '100%'
  };

  // Fetch pollution data (replace with actual API)
  useEffect(() => {
    axios.get('/api/pollution/incidents')
      .then(response => {
        setPollutionData(response.data); // Assuming response.data is an array of pollution incidents
      })
      .catch(error => {
        console.error('Error fetching pollution data:', error);
      });
  }, []);

  return (
    <div className="pollution-map-container">
      <h2>Pollution Incident Map</h2>

      {/* Load the Google Maps API */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={defaultCenter}
        >
          {/* Render markers for each pollution incident */}
          {pollutionData.map(incident => (
            <Marker
              key={incident.id}
              position={{ lat: incident.latitude, lng: incident.longitude }}
              onClick={() => setSelectedMarker(incident)}
            />
          ))}

          {/* Render an InfoWindow when a marker is clicked */}
          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.latitude, lng: selectedMarker.longitude }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h3>{selectedMarker.title}</h3>
                <p>{selectedMarker.description}</p>
                <p><strong>Severity:</strong> {selectedMarker.severity}</p>
                <p><strong>Date:</strong> {new Date(selectedMarker.date).toLocaleDateString()}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default PollutionMap;
