import React from 'react';
import ReactDOM from 'react-dom/client';
import Map from './Map';
import Button from './Start';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Map />
    <Button/>
  </React.StrictMode>
);


