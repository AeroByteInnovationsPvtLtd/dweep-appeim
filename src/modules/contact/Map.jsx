import React, { useEffect } from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";
Geocode.setApiKey(import.meta.env.VITE_GOOGLE_API_KEY);
//Geocode.setApiKey("AIzaSyAohKs5PYLzX5iweNRYOfm_ka6yCunzngo");
Geocode.enableDebug();

const MapContainer = ({
  google,
  locations = [{ lat: 41.998083, lng: -87.684416 }],
}) => {
  useEffect(() => {
    Geocode.fromLatLng(locations[0].lat, locations[0].lng).then(
      (response) => {
        // console.log("fdfdfdf", response.results[0])
        //   const address = response.results[0].formatted_address,
        //     addressArray = response.results[0].address_components,
        //     city = getCity(addressArray) || '',
        //     area = getArea(address, addressArray) || '',
        //     state = getState(addressArray) || '',
        //     country = getCountry(addressArray) || '',
        //     zipCode = getPostalCode(addressArray) || '',
        //     latitude = latLng.lat,
        //     longitude = latLng.lng;
        //   if (!isTyped)
        //     setAddress(`${area},${city},${state},${country}`);
        //   return props.onPlaceSelected({
        //     country,
        //     state,
        //     city,
        //     area,
        //     zipCode,
        //     latitude,
        //     longitude
        //   });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  return (
    <Map
      google={google}
      containerStyle={{
        position: "static",
        width: "100%",
        height: "100%",
      }}
      center={{ lat: 41.998083, lng: -87.684416 - 0.015 }}
      initialCenter={{ lat: 41.998083, lng: -87.684416 - 0.015 }}
      zoom={14}
      // disableDefaultUI={true}
    >
      <InfoWindow visible={true} position={{ lat: 41.998083, lng: -87.684416 }}>
        <p>
          {" "}
         2144 W Devon Ave, Chicago, IL 60659, USA
        </p>
      </InfoWindow>
      {locations.map((coords, index) => (
        <Marker position={{ lat: 41.998083, lng: -87.684416 }} key={index} />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  // apiKey.("AIzaSyCb22Xq4XjQtUAwZrOxL-hKJCWCmNwz3wc");

  //Geocode.setApiKey("AIzaSyAohKs5PYLzX5iweNRYOfm_ka6yCunzngo");
  libraries: ["geometry"],
})(MapContainer);
