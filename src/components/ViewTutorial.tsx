import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ITutorialData from "../types/Tutorial";
import TutorialDataService from "../services/TutorialService";
import MapApi from "../components/Map/MapApi";

function ViewTutorial() {
  const props = useParams();
  const [currentTutorial, setCurrentTutorial] = useState<ITutorialData>({});

  const getAddress = (p: ITutorialData) => {
    return p.street || "" + p.city || "" + p.state || "" + p.postal_code || "";
  };

  const getLocation = (p: ITutorialData) => {
    // return  {
    //     address:  '1600 Amphitheatre Parkway, Mountain View, california.',
    //     lat: 37.42216,
    //     lng:-122.08427,
    //   };
    return {
      address: p.street,
      lat: p.latitude,
      lng: p.longitude,
    };
  };

  useEffect(() => {
    TutorialDataService.get(props.id)
      .then((response: any) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, [props.id]);

  return (
    <div className="list row">
      <div className="col-md-8">
        <h4>Breweries details</h4>
        {currentTutorial && (
          <>
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>
                {currentTutorial.name}
              </div>
              <div>
                <label>
                  <strong>Type:</strong>
                </label>
                {currentTutorial.brewery_type}
              </div>
              <div>
                <label>
                  <strong>Street:</strong>
                </label>
                {getAddress(currentTutorial)}
              </div>
              <div>
                <label>
                  <strong>city:</strong>
                </label>
                {currentTutorial.city}
              </div>
            </div>
            {currentTutorial.latitude  && (
              <MapApi location={getLocation(currentTutorial)} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ViewTutorial;
