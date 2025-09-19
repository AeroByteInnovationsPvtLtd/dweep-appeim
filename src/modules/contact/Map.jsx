import React from "react";

const MapContainer = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.103210432288!2d-87.68698242487082!3d41.9980604712288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1c3b33e045f%3A0xe8eb7562b2d62f2d!2s2144%20W%20Devon%20Ave%20APT%202E%2C%20Chicago%2C%20IL%2060659%2C%20USA!5e0!3m2!1sen!2sin!4v1758177637046!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0,
           transform: "scale(110%)", 
          transformOrigin: "top left",
         }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;