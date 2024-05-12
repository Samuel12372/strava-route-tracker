import './Styles.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from "react";



function Map() {

  let [location, setLocation] = useState(null);
  
  //console.log(location);
  useEffect(() => {
    getCurrentPosition();
    
  }, []);

  function getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setLocation([latitude, longitude]);
    
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div className="App">
      {location && (
      <MapContainer center={location} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0,0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      )};
    </div>
  );
}

export default Map;
