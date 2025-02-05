import { useLocation } from "react-router-dom";

function LocationExample() {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <h1>Current Location</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

export default LocationExample;
