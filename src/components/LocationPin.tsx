import locationIcon from "@iconify/icons-mdi/map-marker";
import { Icon } from "@iconify/react";
const LocationPin = (location:any) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{location.address}</p>
    </div>
  );

  export default LocationPin;